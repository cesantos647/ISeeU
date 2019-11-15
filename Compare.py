import face_recognition 

fileName = ""
unknownFileName = ""
# ------------ loading the image for compare ----------------
def loadImage(fileName):
    image = face_recognition.load_image_file(fileName)

    face_locations = face_recognition.face_locations(image)


# ------------ identifying the face -------------------------
def identify(fileName, unknownFileName):
    known_image = face_recognition.load_image_file(fileName)
    unknown_image = face_recognition.load_image_file(unknownFileName)

    known_user_encoding = face_recognition.face_encodings(known_image)[0]
    unknown_user_encoding = face_recognition.face_encodings(unknown_image)[0]
    results = face_recognition.compare_faces([known_user_encoding], unknown_user_encoding, 0.3)

    print(results)
    return results


# -------------- the main function ----------------------------
if __name__ == "__main__":
    christianPic = "christian_web_2.png"
    unknownChristianPic = "christian_web.jpg"
    loadImage(christianPic)
    identify(christianPic, unknownChristianPic)
