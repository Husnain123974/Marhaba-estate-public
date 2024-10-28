// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import * as React from "react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
// import { nanoid } from "nanoid";
// import supabase from "@/config/supabase";
// type Checked = DropdownMenuCheckboxItemProps["checked"];

// export default function FileUpload({ formData, setFormData }) {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const isInitialLoad = useRef(true);

//   console.log("Form Data ------", formData);

//   useEffect(() => {
//     // Run only if this is the initial load and data exists in formData.images
//     if (isInitialLoad.current && formData.images) {
//       const initialFiles = formData.images.map((url) => ({
//         name: url.split("nextsupabase/")[1].split("?")[0], // Extract just the filename
//         url: url,
//       }));
    
//       setSelectedFiles(initialFiles);
//       isInitialLoad.current = false; // Mark initial load as complete
//     }
//   }, [formData.images]);

//   const handleFileChange = async (event: any) => {
//     console.log("forrm Data ------", event.target.files);
//     const file = event.target.files[0];
//     const filename = `${formData.id}#${file.name}`;

//     const newFiles = Array.from(event.target.files); // Convert the file list to an array
//     const updatedFiles = [...selectedFiles, ...newFiles];

//     setSelectedFiles(updatedFiles); // Append new files to the previous files

//     const { data, error } = await supabase.storage
//       .from("nextsupabase")
//       .upload(`${filename}`, file);

//     const { data: publicURL } = supabase.storage
//       .from("nextsupabase") // Use 'Property_Images' bucket
//       .getPublicUrl(filename);

//     if (publicURL) {
//       console.log("Public URL: ", publicURL);
//       //   imageUrls.push(publicURL.publicUrl);  // Add the public URL to the array
//     }

//     // Update formData with the new files using formData.id
//     setFormData((prevData) => ({
//       ...prevData,
//       images: [
//         ...prevData.images,
//         publicURL?.publicUrl, // Ensure publicURL is valid before using
//       ],
//     }));
//   };

//   const handleRemoveFile = (index) => {
//     const updatedFiles = selectedFiles.filter((_, i) => i !== index);
//     setSelectedFiles(updatedFiles);
//     // Update formData with the remaining files
//     setFormData((prevData) => ({
//       ...prevData,
//       images: updatedFiles.map((file) => file.name),
//     }));
//   };

//   return (
//     <div className="grid grid-cols-4 items-center gap-4">
//       <div className="col-span-3">
//         <Input
//           id="feature_images"
//           type="file"
//           multiple
//           onChange={handleFileChange}
//         />

//         {selectedFiles.length > 0 && (
//           <div className="mt-4">
//             <h4 className="mb-2">Selected Files:</h4>
//             <ul className="space-y-2">
//               {selectedFiles.map((file, index) => (
//                 <li
//                   key={index}
//                   className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
//                 >
//                   <span>{file.name}</span>
//                   <button
//                     onClick={() => handleRemoveFile(index)}
//                     className="bg-red-500 text-white rounded-full p-1 ml-4"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-4 h-4"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import supabase from "@/config/supabase";
import { nanoid } from "nanoid";

export default function FileUpload({ formData, setFormData }) {
  const [selectedFiles, setSelectedFiles] = useState([]); // For displaying short names
  const [fullImageUrls, setFullImageUrls] = useState([]); // For storing actual URLs

  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current && formData.images) {
      const initialFiles = formData.images.map((url) => ({
        name: url.split("#")[2], // Extract short name
        url: url,
      }));
      setSelectedFiles(initialFiles);
      setFullImageUrls(formData.images); // Keep full URLs for backend
      setFormData((prevData) => ({ ...prevData, oldImages: formData.images })); // Add old images
      isInitialLoad.current = false;
    }
  }, [formData.images]);

//   const handleFileChange = async (event) => {
//     const files = Array.from(event.target.files);

//     // Process each selected file and upload
//     for (let file of files) {
//       const filename = `${formData.id}#${file.name}`;
//       console.log("Files in new implementation ---------- ",file);
//       console.log("File name ---------- ",filename);

//       //     const { data, error } = await supabase.storage
// //       .from("nextsupabase")
// //       .upload(`${filename}`, file);

// //     const { data: publicURL } = supabase.storage
// //       .from("nextsupabase") // Use 'Property_Images' bucket
// //       .getPublicUrl(filename);

//           const { data, error } = await supabase.storage
//       .from("nextsupabase")
//       .upload(`${filename}`, file);

//       const { data: publicURL } = supabase.storage
//         .from("nextsupabase")
//         .getPublicUrl(filename);

//       if (publicURL) {
//         const shortName = filename.split("nextsupabase/")[1].split("?")[0];
//         setSelectedFiles((prev) => [...prev, { name: shortName, url: publicURL.publicUrl }]);
//         setFullImageUrls((prev) => [...prev, publicURL.publicUrl]); // Keep full URLs
//         setFormData((prevData) => ({
//           ...prevData,
//           images: [...prevData.images, publicURL.publicUrl],
//         }));
//       }
//     }
//   };



const handleFileChange = async (event: any) => {
  console.log("forrm Data ------", event.target.files);
  const file = event.target.files[0];
  const uniqueId = nanoid(); // Generate a unique ID for the image
      const filename = `${uniqueId}#${formData.id}#${file.name}`; // Append UUID to the filename
    
  const newFiles = Array.from(event.target.files); // Convert the file list to an array
  const updatedFiles = [...selectedFiles, ...newFiles];

  setSelectedFiles(updatedFiles); // Append new files to the previous files

  const { data, error } = await supabase.storage
    .from("nextsupabase")
    .upload(`${filename}`, file);

  const { data: publicURL } = supabase.storage
    .from("nextsupabase") // Use 'Property_Images' bucket
    .getPublicUrl(filename);

  if (publicURL) {
    console.log("Public URL: ", publicURL);
    //   imageUrls.push(publicURL.publicUrl);  // Add the public URL to the array
  }

  // Update formData with the new files using formData.id
  setFormData((prevData) => ({
    ...prevData,
    images: [
      ...prevData.images,
      publicURL?.publicUrl, // Ensure publicURL is valid before using
    ],
  }));
};





  const handleRemoveFile = (index) => {
    const updatedSelectedFiles = selectedFiles.filter((_, i) => i !== index);
    const updatedFullUrls = fullImageUrls.filter((_, i) => i !== index);
    console.log("updated full waly URLs ------------- ",updatedFullUrls);
    setSelectedFiles(updatedSelectedFiles);
    setFullImageUrls(updatedFullUrls);

    // Update formData with the remaining full URLs for backend
    setFormData((prevData) => ({
      ...prevData,
      images: updatedFullUrls,
      oldImages: prevData.oldImages, // Keep old images intact
    }));


    console.log("handle remove file ----- ",formData);
  };























  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <div className="col-span-3">
        <Input
          id="feature_images"
          type="file"
          multiple
          onChange={handleFileChange}
        />

        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-2">Selected Files:</h4>
            <ul className="space-y-2">
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                >
                  <span>{file.name}</span>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="bg-red-500 text-white rounded-full p-1 ml-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
