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


export default function Page() {
  return (
    <main className="bg-background flex flex-col w-full p-8 gap-4">
      <div className="flex justify-between text-6xl">
        <h1>2H 50M</h1>
        <h1>D-73</h1>
      </div>
      <Table>
        <TableCaption>A list of your tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Task</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>ToDo</TableCell>
            <TableCell><Badge className="mr-2">HomeWork</Badge>Do the homework</TableCell>
            <TableCell className="text-right"><TableAction /></TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </main>
  );
}
