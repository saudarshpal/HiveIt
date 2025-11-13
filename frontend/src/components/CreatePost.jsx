"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Upload, X } from "lucide-react";
import { useRecoilState } from "recoil";
import { postModalAtom } from "@/store/atoms/Modal";

export default function CreatePost() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom)
  return (
    <>
      {postModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Blurred dark overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setPostModal(false)}></div>
          {/* Modal card */}
          <Card className="relative w-full max-w-lg bg-neutral-900 border border-sky-700 shadow-2xl rounded-2xl">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-xl font-semibold text-gray-100">Create Post</CardTitle>
              <button onClick={() => setPostModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Title
                </label>
                <Input
                  className="bg-neutral-800 border-gray-700 text-white placeholder-gray-500"
                  placeholder="Enter post title"
                />
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
