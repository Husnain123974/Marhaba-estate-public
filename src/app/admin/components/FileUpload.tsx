import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { nanoid } from "nanoid";
import supabase from "@/config/supabase";
type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function FileUpload({ formData, setFormData }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = async (event : any) => {

        console.log("file------",event.target.files);
        const file = event.target.files[0];
        const filename = `${formData.id}#${file.name}`;


        const newFiles = Array.from(event.target.files); // Convert the file list to an array
        const updatedFiles = [...selectedFiles, ...newFiles];
      
        setSelectedFiles(updatedFiles); // Append new files to the previous files
      

        const { data, error } = await supabase.storage
          .from("nextsupabase")
          .upload(
            `${filename}`,
            file
          );
    
    const { data: publicURL } = supabase.storage
      .from('nextsupabase')  // Use 'Property_Images' bucket
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
            publicURL?.publicUrl,  // Ensure publicURL is valid before using
            ],
        }));
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    // Update formData with the remaining files
    setFormData((prevData) => ({
      ...prevData,
      images: updatedFiles.map(file => file.name),
    }));
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
