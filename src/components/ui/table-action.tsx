import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react";

interface TableActionProps {
  tableId: string
  taskId: string
}

export const TableAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><Ellipsis /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => alert("edit")}>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => alert("labels")}>Labels</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
