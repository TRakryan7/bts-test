import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaRegTrashAlt } from "react-icons/fa";

export function CardItem() {
  return (
    <Card className="w-[350px] h-[400px]">
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle className="text-xl">Today List</CardTitle>
            </div>
            <div>
                <Button variant="ghost" className="text-red-500">
                    <FaRegTrashAlt/>
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}
