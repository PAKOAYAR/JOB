import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const LatestJobCards = () => {
  const { alljobs = [] } = useSelector((store) => store.job);
 
  return (
    <>
      {alljobs.map((item, index) => {
        return (
          <div
            key={index}
            className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
          >
            <div>
              <h1 className="font-medium text-lg">{item?.company?.name}</h1>
              <p className="text-sm text-gray-500">{item?.location}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg my-2">{item?.title}</h1>
              <p className="text-sm text-gray-600">
                {item?.description}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
                {item?.position}
              </Badge>
              <Badge className={"text-[#F83002] font-bold "} variant={"ghost"}>
                {item?.jobType}
              </Badge>
              <Badge className={"text-[#7209b7] font-bold "} variant={"ghost"}>
                {item?.salary}
              </Badge>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LatestJobCards;