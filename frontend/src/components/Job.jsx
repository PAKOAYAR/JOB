import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Job = () => {
  const { alljobs = [] } = useSelector((store) => store.job);
  
  const navigate = useNavigate();
  
  return (
    <>
      {alljobs.map((item, index) => {
        return (
          <div key={index} className="p-5 rounded-md bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">2 days ago</p>
              <Button variant="outline" className="rounded-full" size="icon">
                <Bookmark />
              </Button>
            </div>
  
            <div className="flex items-center gap-2 my-2">
              <Button>
                <Avatar>
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s" />
                </Avatar>
              </Button>
              <div>
                <h1 className="font-medium text-lg">{item?.company?.name}</h1>
                <p className="text-sm text-gray-600">{item?.location}</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg my-2">{item?.title}</h1>
              <p className="text-sm text-gray-600">
                {item?.description}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
                {item?.position} Positions
              </Badge>
              <Badge className={"text-[#F83002] font-bold "} variant={"ghost"}>
                {item?.jobType}
              </Badge>
              <Badge className={"text-[#7209b7] font-bold "} variant={"ghost"}>
                {item?.salary} LPA
              </Badge>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Button onClick={() => navigate(`/description/${item?._id}`)} variant='outline'>Detail</Button>
              <Button className='bg-[#7209b7]'>Save For Later</Button>
            </div>
          </div>
        ); 
      })}
    </>
  );
};

export default Job;