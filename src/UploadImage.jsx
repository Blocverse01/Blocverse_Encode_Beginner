import { uploadImage } from "./utils/handle-images";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import Swal from "sweetalert2";

const fileTypes = ["JPG", "PNG", "GIF", "SVG"];

export default function UploadImage() {
  const [inputValue, setInputValue] = useState({
    caption: "",
    media: null,
  });
  const gram = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [uploading, setUploading] = useState(false);
  return (
    <section>
      <div className="grid grid-cols-1 text-slate-100 p-5 md:p-6 gap-10">
        <div>
          <label className="block mb-2">Caption</label>
          <input
            name="caption"
            className="px-3 py-3 bg-gray-600 text-slate-200 rounded-md w-full"
            value={gram.caption}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label className="block mb-2">Image File</label>
          <FileUploader
            value={gram.media}
            handleChange={(file) => handleChange({ target: { name: "media", value: file } })}
            types={fileTypes}
            children={
              <div className="text-white cursor-pointer">
                {gram.media ? (
                  <div className="relative">
                    <div className="bg-black p-4 absolute bg-opacity-40 z-10 inset-0 h-[240px] sm:h-[470px] flex items-center justify-center">
                      <div>
                        <div className="text-center">
                          <FontAwesomeIcon icon={regular("image")} className="text-white text-3xl" />
                        </div>
                        <div className="text-center mt-[15.45px] text-[15px] font-[600] leading-[27.58px]">
                          Drag and Drop or Click, if you need to Change this Image
                        </div>
                      </div>
                    </div>
                    <img
                      src={URL.createObjectURL(gram.media)}
                      className="h-[240px] sm:h-[470px] object-cover w-full"
                      alt="Thumb"
                    />
                  </div>
                ) : (
                  <div className="py-[24px] px-4 bg-gray-800">
                    <div className="text-center">
                      <FontAwesomeIcon icon={solid("image")} className="text-white text-4xl" />
                    </div>
                    <h3 className="text-center mt-[15.45px] text-[15px] font-[600] leading-[27.58px]">
                      Drag and Drop or Click to Add an Image
                    </h3>
                    <h3 className="text-center font-[500] text-[12px] leading-[22.07px]">
                      Must be JPEG, SVG, PNG or GIF; Must not exceed 10MB
                    </h3>
                  </div>
                )}
              </div>
            }
          />
        </div>
        <div className="flex justify-end">
          <button
            disabled={uploading ? true : false}
            className="btn"
            onClick={async () => {
              setUploading(true);
              let uploaded = await uploadImage(gram.media, gram.caption);
              setUploading(false);
              if (uploaded) {
                Swal.fire({
                  title: "Yayy 🎉!",
                  text: "your photo has been uploaded successfully",
                  icon: "success",
                  confirmButtonText: "That's cool",
                });
                setInputValue({ caption: "", media: null });
                return;
              }
              Swal.fire({
                title: "Something is wrong 😪!",
                text: "we couldn't upload your photo successfully",
                icon: "error",
                confirmButtonText: "I'd try again",
              });
              return;
            }}
          >
            {uploading && <FontAwesomeIcon icon={solid("spinner")} spin />}{" "}
            {uploading ? "Uploading..." : "Upload Me 🚀"}
          </button>
        </div>
      </div>
    </section>
  );
}
