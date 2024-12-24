import React from "react";
import { Badge } from "./ui/badge";

import subject1 from "@/assets/images/subject1.png";
import subject2 from "@/assets/images/subject2.png";
import Image, { StaticImageData } from "next/image";

const SubjectBadgeWithBatch: React.FC<{ batch: string; subject: string }> = ({
  subject,
  batch,
}) => {
  let img: StaticImageData = subject1;
  let subjectName: string = "";

  switch (subject) {
    case "sci": {
      img = subject1;
      subjectName = "Science";
      break;
    }
    case "math": {
      img = subject2;
      subjectName = "Math";
      break;
    }
    case "cs": {
      img = subject1;
      subjectName = "CS";
      break;
    }
    case "eng": {
      img = subject2;
      subjectName = "English";
      break;
    }
    default: {
      img = subject1;
      subjectName = "";
      break;
    }
  }

  const getBatchName = () => {
    const batchF: string = batch.substring(0, 4).toUpperCase();
    const batchS: string = batch.substring(4);

    return `${batchF} ${batchS}`;
  };

  return (
    <Badge className="shrink-0 flex justify-center items-center gap-1 bg-[#F6F8FA] hover:bg-[#dfe0e2] px-[0.125rem] pl-1 pr-2">
      <div className="size-5 rounded-sm overflow-hidden">
        <Image
          src={img}
          alt={subject}
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <p className="text-xs text-black font-medium">{`${getBatchName()} ${subjectName}`}</p>
    </Badge>
  );
};

export default SubjectBadgeWithBatch;
