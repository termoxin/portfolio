import API from "./Api";

const config = {
  onUploadProgress(progressEvent) {
    var percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    console.log(percentCompleted);
  }
};

export const avatarUploading = payload => {
  return API.post("/api/uploadFile", payload, config);
};
