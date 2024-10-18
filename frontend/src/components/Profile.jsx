import React from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s"
                alt="profile"
              ></AvatarImage>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat porro id ducimus.
              </p>
            </div>
          </div>

          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
            <div className="flex items-center gap-3 my-2">
            <Mail/>
            <span>Pankaj@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 my-2">
            <Contact/>
            <span>6355863125</span>
            </div>
           
        </div>
        <div>
            <h1>skill</h1>
            {
                [1,2,3,4,5].map((item,index)=><Badge key={index}>{item}</Badge>)
            }
        </div>
      </div>
    </div>
  );
};

export default Profile;
