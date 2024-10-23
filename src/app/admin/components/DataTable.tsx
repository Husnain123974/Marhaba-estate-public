
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

  // Handle individual checkbox change
  const handleCheckboxChange = (index: number) => {
    const newSelectedIndexes = selectedIndexes.includes(index)
      ? selectedIndexes.filter(i => i !== index)
      : [...selectedIndexes, index];
      
    setSelectedIndexes(newSelectedIndexes);
    onSelectionChange(newSelectedIndexes);
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = () => {
    if (isSelectAllChecked) {
      // Deselect all rows
      setSelectedIndexes([]);
      onSelectionChange([]);
    } else {
      // Select all rows
      const allIndexes = data.map((_, index) => index);
      setSelectedIndexes(allIndexes);
      onSelectionChange(allIndexes);
    }
    setIsSelectAllChecked(!isSelectAllChecked);  
  };

  return (
    <div className="overflow-hidden border border-gray-300 rounded-[6px] bg-[#d7d5dd]"> {/* Apply border-radius here */}
   
    <Table >
    
      <TableHeader>
        <TableRow className="bg-[#8e9094] hover:bg-[#8e9094]">
          <TableHead className="w-[50px]">
            <Checkbox
              checked={isSelectAllChecked}
              onCheckedChange={handleSelectAllChange}  
            />
          </TableHead>
          {headers.map((header, index) => (
            <TableHead key={index} className="text-black">{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell className="w-[50px]">
              <Checkbox
                checked={selectedIndexes.includes(rowIndex)}  
                onCheckedChange={() => handleCheckboxChange(rowIndex)}  
              />
            </TableCell>
            {Object.values(row).map((value, colIndex) => (
              <TableCell key={colIndex}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>   
    </Table>
  </div>
  );
}
