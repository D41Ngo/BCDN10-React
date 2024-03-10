import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import CSS from "./upload.module.css";

function Upload({ title = "Click to Upload" }, ref) {
  // const title = props.title ? props.title : 'Click to Upload'
  // const { title = 'Click to Upload' } = props;
  const inpRef = useRef();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    return () => {
      files.forEach((i) => URL.revokeObjectURL(i.url));
    };
  }, [files]);

  useImperativeHandle(
    ref,
    () => {
      // Chỉnh sửa những thuộc tính hoặc method của ref.current
      return {
        getAllFile: () => files,
      };
    },
    [files]
  );

  return (
    <div>
      <div>
        <button
          className={CSS.Upload}
          onClick={() => {
            inpRef.current.click();
          }}
        >
          {title}
        </button>

        <input
          onChange={(event) => {
            const newFiles = [];
            for (const file of event.target.files) {
              // Chuyển file về dạng blob
              const content = new Blob([file]);
              // --
              const url = URL.createObjectURL(file);

              const f = {
                content,
                url,
              };

              newFiles.push(f);
            }

            setFiles(newFiles);
          }}
          ref={inpRef}
          className="d-none"
          type="file"
          multiple
        />
      </div>

      <div>
        {files.map((i) => {
          return (
            <img
              key={i.url}
              style={{
                width: 200,
                objectFit: "cover",
              }}
              src={i.url}
              alt="..."
            />
          );
        })}
      </div>
    </div>
  );
}

// cho phép component bên ngoài truyền ref vào.
export default forwardRef(Upload);
