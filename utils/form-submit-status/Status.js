import React, { useState } from 'react'

export const Status = (para) => {
    const [uploadStatus, setUploadStatus] = useState(false);
    if(para === true){
        setUploadStatus(true);
    }
  return uploadStatus;
}
