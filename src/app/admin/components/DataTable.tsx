
// 'use client'
// import {
//   Table,
//   TableBody, 
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useState } from 'react';

// interface DataTableProps {
//   headers: string[];
//   data: Array<{ [key: string]: any }>;
//   onSelectionChange: (selectedIndexes: number[]) => void;
// }

// export function DataTable({ headers, data, onSelectionChange }: DataTableProps) {
//   const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);  
//   const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);  

//   // Handle individual checkbox change
//   const handleCheckboxChange = (index: number) => {
//     const newSelectedIndexes = selectedIndexes.includes(index)
//       ? selectedIndexes.filter(i => i !== index)
//       : [...selectedIndexes, index];
      
//     setSelectedIndexes(newSelectedIndexes);
//     onSelectionChange(newSelectedIndexes);
//   };

//   // Handle "Select All" checkbox change
//   const handleSelectAllChange = () => {
//     if (isSelectAllChecked) {
//       // Deselect all rows
//       setSelectedIndexes([]);
//       onSelectionChange([]);
//     } else {
//       // Select all rows
//       const allIndexes = data.map((_, index) => index);
//       setSelectedIndexes(allIndexes);
//       onSelectionChange(allIndexes);
//     }
//     setIsSelectAllChecked(!isSelectAllChecked);  
//   };

//   return (
//     <div className="overflow-hidden border border-gray-300 rounded-[6px] bg-[#d7d5dd]"> {/* Apply border-radius here */}
   
//     <Table >
    
//       <TableHeader>
//         <TableRow className="bg-[#8e9094] hover:bg-[#8e9094]">
//           <TableHead className="w-[50px]">
//             <Checkbox
//               checked={isSelectAllChecked}
//               onCheckedChange={handleSelectAllChange}  
//             />
//           </TableHead>
//           {headers.map((header, index) => (
//             <TableHead  key={index} className="text-black w-[10px]">{header}</TableHead>
//           ))}
//         </TableRow>
//       </TableHeader>
//       <div className="max-h-[50vh] w-full overflow-y-auto">
//       <TableBody className="border border-[red] w-full">
//         {data.map((row, rowIndex) => (
//           <TableRow key={rowIndex}>
//             <TableCell className="w-[50px]">
//               <Checkbox
//                 checked={selectedIndexes.includes(rowIndex)}  
//                 onCheckedChange={() => handleCheckboxChange(rowIndex)}  
//               />
//             </TableCell>
//             {Object.values(row).map((value, colIndex) => (
//               <TableCell key={colIndex}>{value}</TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>   
//       </div>
//     </Table>
//   </div>
//   );
// }


'use client'
import {
  Table,
  TableBody, 
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from 'react';

interface DataTableProps {
  headers: string[];
  data: Array<{ [key: string]: any }>;
  onSelectionChange: (selectedIndexes: number[]) => void;
}

export function DataTable({ headers, data, onSelectionChange }: DataTableProps) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);  
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);  
  const fieldsToHide = [
    'id', 'images', 'amenities', 'created_at', 'propertytype', 'isgreystructure', 'isfeatured'
  ];
  const handleCheckboxChange = (index: number) => {
    const newSelectedIndexes = selectedIndexes.includes(index)
      ? selectedIndexes.filter(i => i !== index)
      : [...selectedIndexes, index];
      
    setSelectedIndexes(newSelectedIndexes);
    onSelectionChange(newSelectedIndexes);
  };

  const handleSelectAllChange = () => {
    if (isSelectAllChecked) {
      setSelectedIndexes([]);
      onSelectionChange([]);
    } else {
      const allIndexes = data.map((_, index) => index);
      setSelectedIndexes(allIndexes);
      onSelectionChange(allIndexes);
    }
    setIsSelectAllChecked(!isSelectAllChecked);  
  };

  return (
    <div className="overflow-hidden border border-gray-300 rounded-[6px] bg-[#d7d5dd]">
      <Table>
        {/* Set TableHeader to display as block */}
        <TableHeader className="block">
          <TableRow className="flex bg-[#8e9094] hover:bg-[#8e9094] pt-3">
            <TableHead className="w-[50px]">
              <Checkbox
                checked={isSelectAllChecked}
                onCheckedChange={handleSelectAllChange}  
              />
            </TableHead>
            {headers.map((header, index) => (
              <TableHead key={index} className=" flex-1 text-black">{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        
        {/* Set TableBody to have max height with scroll and display as block */}
        <div className="max-h-[75vh] overflow-y-auto">
        <TableBody className="block">
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="flex">
                <TableCell className="w-[50px]">
                  <Checkbox
                    checked={selectedIndexes.includes(rowIndex)}  
                    onCheckedChange={() => handleCheckboxChange(rowIndex)}  
                  />
                </TableCell>
                {Object.entries(row)
                  .filter(([key]) => !fieldsToHide.includes(key))
                  .map(([_, value], colIndex) => (
                    <TableCell key={colIndex} className="flex-1">{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>  
        </div>
      </Table>
    </div>
  );
}
