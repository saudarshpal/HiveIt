"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react";
import { useRecoilState } from "recoil";
import { createModalAtom} from "@/store/atoms/Modal";
import { useState } from "react";

const CreatePost=()=> {
  const [modal,setModal] = useRecoilState(createModalAtom)
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  return (
    <>
      {modal==="createPost" && (
          <Card className="bg-neutral-900 border-neutral-800 shadow-neutral-600 rounded-2xl w-full max-w-2xl">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-xl font-semibold text-gray-100">Create Post</CardTitle>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Title
                </label>
                <Input value={title} onChange={(e)=>setTitle(e.target.value)} className="bg-neutral-800 border-gray-700 text-white placeholder-gray-500" placeholder="Enter post title"/>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Description
                </label>
                <Textarea
                  className="bg-neutral-800 border-gray-700 text-white placeholder-gray-500"
                  rows={5}
                  placeholder="Write your thoughts..."
                />
              </div>

              {/* Image upload */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Attach Images
                </label>
                <label className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg border border-gray-700 cursor-pointer hover:bg-neutral-700 transition">
                  <Upload className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-300 text-sm">Upload Images</span>
                  <input type="file" multiple accept="image/*" className="hidden" />
                </label>
              </div>

              {/* Post Button */}
              <div className="flex justify-end">
                <Button className="bg-sky-700 hover:bg-sky-600 text-white px-6 py-2 rounded-xl transition">
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>
      )}
    </>
  );
}
export default CreatePost