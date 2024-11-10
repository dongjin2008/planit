"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { TableAction } from "@/components/ui/table-action" 
import { Badge } from "@/components/ui/badge"


const  Resources = () => {
  return (
    <main className="bg-background flex flex-col w-full p-8 gap-4">
      <div className="flex justify-center text-6xl">
        <h1>Resources</h1>
      </div>
      <Table>
        <TableCaption>A list of your resources.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Resource</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Math</TableCell>
            <TableCell>2024/11/10</TableCell>
            <TableCell>수학 삼각함수 기출</TableCell>
            <TableCell className="text-right"><TableAction /></TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </main>
  );
}

export default Resources;