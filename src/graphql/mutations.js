/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      Email
      Name
      NoOfProfiles
      Profiles {
        nextToken
      }
      LastLogin
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      Email
      Name
      NoOfProfiles
      Profiles {
        nextToken
      }
      LastLogin
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      Email
      Name
      NoOfProfiles
      Profiles {
        nextToken
      }
      LastLogin
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      UserRef {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
      }
      Name
      Age
      PictureURL
      IsDefault
      RewardsScored
      id
      createdAt
      updatedAt
      usersProfilesId
      owner
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      UserRef {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
      }
      Name
      Age
      PictureURL
      IsDefault
      RewardsScored
      id
      createdAt
      updatedAt
      usersProfilesId
      owner
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      UserRef {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
      }
      Name
      Age
      PictureURL
      IsDefault
      RewardsScored
      id
      createdAt
      updatedAt
      usersProfilesId
      owner
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      IsPremium
      IsTest
      Locale
      Levels {
        nextToken
      }
      createdAt
      updatedAt
      teacherSubjectsId
      schoolSubjectsId
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      IsPremium
      IsTest
      Locale
      Levels {
        nextToken
      }
      createdAt
      updatedAt
      teacherSubjectsId
      schoolSubjectsId
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      IsPremium
      IsTest
      Locale
      Levels {
        nextToken
      }
      createdAt
      updatedAt
      teacherSubjectsId
      schoolSubjectsId
    }
  }
`;
export const createLevel = /* GraphQL */ `
  mutation CreateLevel(
    $input: CreateLevelInput!
    $condition: ModelLevelConditionInput
  ) {
    createLevel(input: $input, condition: $condition) {
      id
      Name
      subjectID
      SubjectObj {
        id
        Name
        Description
        IsActive
        IsPremium
        IsTest
        Locale
        createdAt
        updatedAt
        teacherSubjectsId
        schoolSubjectsId
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      LocalizedDescription
      Chapters {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLevel = /* GraphQL */ `
  mutation UpdateLevel(
    $input: UpdateLevelInput!
    $condition: ModelLevelConditionInput
  ) {
    updateLevel(input: $input, condition: $condition) {
      id
      Name
      subjectID
      SubjectObj {
        id
        Name
        Description
        IsActive
        IsPremium
        IsTest
        Locale
        createdAt
        updatedAt
        teacherSubjectsId
        schoolSubjectsId
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      LocalizedDescription
      Chapters {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLevel = /* GraphQL */ `
  mutation DeleteLevel(
    $input: DeleteLevelInput!
    $condition: ModelLevelConditionInput
  ) {
    deleteLevel(input: $input, condition: $condition) {
      id
      Name
      subjectID
      SubjectObj {
        id
        Name
        Description
        IsActive
        IsPremium
        IsTest
        Locale
        createdAt
        updatedAt
        teacherSubjectsId
        schoolSubjectsId
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      LocalizedDescription
      Chapters {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChapter = /* GraphQL */ `
  mutation CreateChapter(
    $input: CreateChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    createChapter(input: $input, condition: $condition) {
      id
      Name
      levelID
      LevelObj {
        id
        Name
        subjectID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        LocalizedDescription
        createdAt
        updatedAt
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      ChapterOrder
      LocalizedDescription
      Questions {
        nextToken
      }
      Lessons {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChapter = /* GraphQL */ `
  mutation UpdateChapter(
    $input: UpdateChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    updateChapter(input: $input, condition: $condition) {
      id
      Name
      levelID
      LevelObj {
        id
        Name
        subjectID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        LocalizedDescription
        createdAt
        updatedAt
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      ChapterOrder
      LocalizedDescription
      Questions {
        nextToken
      }
      Lessons {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChapter = /* GraphQL */ `
  mutation DeleteChapter(
    $input: DeleteChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    deleteChapter(input: $input, condition: $condition) {
      id
      Name
      levelID
      LevelObj {
        id
        Name
        subjectID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        LocalizedDescription
        createdAt
        updatedAt
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      ChapterOrder
      LocalizedDescription
      Questions {
        nextToken
      }
      Lessons {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      Name
      LocalizedName
      LocalizedDescription
      LocalizedAudioDescription
      chapterID
      ChapterObj {
        id
        Name
        levelID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        ChapterOrder
        LocalizedDescription
        createdAt
        updatedAt
        owner
      }
      Description
      IsActive
      IsPremium
      IsTest
      Type
      Skill
      QuestionObject
      QuestionOrder
      NoOfQuestions
      SuggestedRewardPoints
      PassPercentage
      Version
      TimeAllowed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      Name
      LocalizedName
      LocalizedDescription
      LocalizedAudioDescription
      chapterID
      ChapterObj {
        id
        Name
        levelID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        ChapterOrder
        LocalizedDescription
        createdAt
        updatedAt
        owner
      }
      Description
      IsActive
      IsPremium
      IsTest
      Type
      Skill
      QuestionObject
      QuestionOrder
      NoOfQuestions
      SuggestedRewardPoints
      PassPercentage
      Version
      TimeAllowed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      Name
      LocalizedName
      LocalizedDescription
      LocalizedAudioDescription
      chapterID
      ChapterObj {
        id
        Name
        levelID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        ChapterOrder
        LocalizedDescription
        createdAt
        updatedAt
        owner
      }
      Description
      IsActive
      IsPremium
      IsTest
      Type
      Skill
      QuestionObject
      QuestionOrder
      NoOfQuestions
      SuggestedRewardPoints
      PassPercentage
      Version
      TimeAllowed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      Name
      LocalizedName
      LocalizedDescription
      LocalizedAudioDescription
      chapterID
      ChapterObj {
        id
        Name
        levelID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        ChapterOrder
        LocalizedDescription
        createdAt
        updatedAt
        owner
      }
      Description
      IsActive
      IsPremium
      IsTest
      showAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      Name
      LocalizedName
      LocalizedDescription
      LocalizedAudioDescription
      chapterID
      ChapterObj {
        id
        Name
        levelID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        ChapterOrder
        LocalizedDescription
        createdAt
        updatedAt
        owner
      }
      Description
      IsActive
      IsPremium
      IsTest
      showAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      Name
      LocalizedName
      LocalizedDescription
      LocalizedAudioDescription
      chapterID
      ChapterObj {
        id
        Name
        levelID
        Description
        IsActive
        IsPremium
        IsTest
        LocalizedName
        ChapterOrder
        LocalizedDescription
        createdAt
        updatedAt
        owner
      }
      Description
      IsActive
      IsPremium
      IsTest
      showAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSubjectProfileLevel = /* GraphQL */ `
  mutation CreateSubjectProfileLevel(
    $input: CreateSubjectProfileLevelInput!
    $condition: ModelSubjectProfileLevelConditionInput
  ) {
    createSubjectProfileLevel(input: $input, condition: $condition) {
      id
      subjectID
      profileID
      levelID
      LevelOrder
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSubjectProfileLevel = /* GraphQL */ `
  mutation UpdateSubjectProfileLevel(
    $input: UpdateSubjectProfileLevelInput!
    $condition: ModelSubjectProfileLevelConditionInput
  ) {
    updateSubjectProfileLevel(input: $input, condition: $condition) {
      id
      subjectID
      profileID
      levelID
      LevelOrder
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSubjectProfileLevel = /* GraphQL */ `
  mutation DeleteSubjectProfileLevel(
    $input: DeleteSubjectProfileLevelInput!
    $condition: ModelSubjectProfileLevelConditionInput
  ) {
    deleteSubjectProfileLevel(input: $input, condition: $condition) {
      id
      subjectID
      profileID
      levelID
      LevelOrder
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createScore = /* GraphQL */ `
  mutation CreateScore(
    $input: CreateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    createScore(input: $input, condition: $condition) {
      id
      subjectProfileLevelID
      QuestionID
      ChapterID
      Description
      ScoredPoints
      Status
      TimeTaken
      Attempts
      Skill
      LastTestTime
      Answer
      SubjectProfileType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateScore = /* GraphQL */ `
  mutation UpdateScore(
    $input: UpdateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    updateScore(input: $input, condition: $condition) {
      id
      subjectProfileLevelID
      QuestionID
      ChapterID
      Description
      ScoredPoints
      Status
      TimeTaken
      Attempts
      Skill
      LastTestTime
      Answer
      SubjectProfileType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteScore = /* GraphQL */ `
  mutation DeleteScore(
    $input: DeleteScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    deleteScore(input: $input, condition: $condition) {
      id
      subjectProfileLevelID
      QuestionID
      ChapterID
      Description
      ScoredPoints
      Status
      TimeTaken
      Attempts
      Skill
      LastTestTime
      Answer
      SubjectProfileType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProfileScoreSummary = /* GraphQL */ `
  mutation CreateProfileScoreSummary(
    $input: CreateProfileScoreSummaryInput!
    $condition: ModelProfileScoreSummaryConditionInput
  ) {
    createProfileScoreSummary(input: $input, condition: $condition) {
      id
      SubjectProfileID
      TotalScore
      ReadingScore
      WritingScore
      ListeningScore
      SpeakingScore
      CompletedExcersises
      Status
      Description
      ReferenceID
      ReferenceType
      ScoreList
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProfileScoreSummary = /* GraphQL */ `
  mutation UpdateProfileScoreSummary(
    $input: UpdateProfileScoreSummaryInput!
    $condition: ModelProfileScoreSummaryConditionInput
  ) {
    updateProfileScoreSummary(input: $input, condition: $condition) {
      id
      SubjectProfileID
      TotalScore
      ReadingScore
      WritingScore
      ListeningScore
      SpeakingScore
      CompletedExcersises
      Status
      Description
      ReferenceID
      ReferenceType
      ScoreList
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProfileScoreSummary = /* GraphQL */ `
  mutation DeleteProfileScoreSummary(
    $input: DeleteProfileScoreSummaryInput!
    $condition: ModelProfileScoreSummaryConditionInput
  ) {
    deleteProfileScoreSummary(input: $input, condition: $condition) {
      id
      SubjectProfileID
      TotalScore
      ReadingScore
      WritingScore
      ListeningScore
      SpeakingScore
      CompletedExcersises
      Status
      Description
      ReferenceID
      ReferenceType
      ScoreList
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBadges = /* GraphQL */ `
  mutation CreateBadges(
    $input: CreateBadgesInput!
    $condition: ModelBadgesConditionInput
  ) {
    createBadges(input: $input, condition: $condition) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const updateBadges = /* GraphQL */ `
  mutation UpdateBadges(
    $input: UpdateBadgesInput!
    $condition: ModelBadgesConditionInput
  ) {
    updateBadges(input: $input, condition: $condition) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const deleteBadges = /* GraphQL */ `
  mutation DeleteBadges(
    $input: DeleteBadgesInput!
    $condition: ModelBadgesConditionInput
  ) {
    deleteBadges(input: $input, condition: $condition) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const createProfileBadges = /* GraphQL */ `
  mutation CreateProfileBadges(
    $input: CreateProfileBadgesInput!
    $condition: ModelProfileBadgesConditionInput
  ) {
    createProfileBadges(input: $input, condition: $condition) {
      id
      BadgeID
      BadgesCount
      ProfileID
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProfileBadges = /* GraphQL */ `
  mutation UpdateProfileBadges(
    $input: UpdateProfileBadgesInput!
    $condition: ModelProfileBadgesConditionInput
  ) {
    updateProfileBadges(input: $input, condition: $condition) {
      id
      BadgeID
      BadgesCount
      ProfileID
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProfileBadges = /* GraphQL */ `
  mutation DeleteProfileBadges(
    $input: DeleteProfileBadgesInput!
    $condition: ModelProfileBadgesConditionInput
  ) {
    deleteProfileBadges(input: $input, condition: $condition) {
      id
      BadgeID
      BadgesCount
      ProfileID
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createImages = /* GraphQL */ `
  mutation CreateImages(
    $input: CreateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    createImages(input: $input, condition: $condition) {
      id
      Name
      Description
      Keywords
      IsActive
      ImageURL
      ImageType
      createdAt
      updatedAt
    }
  }
`;
export const updateImages = /* GraphQL */ `
  mutation UpdateImages(
    $input: UpdateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    updateImages(input: $input, condition: $condition) {
      id
      Name
      Description
      Keywords
      IsActive
      ImageURL
      ImageType
      createdAt
      updatedAt
    }
  }
`;
export const deleteImages = /* GraphQL */ `
  mutation DeleteImages(
    $input: DeleteImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    deleteImages(input: $input, condition: $condition) {
      id
      Name
      Description
      Keywords
      IsActive
      ImageURL
      ImageType
      createdAt
      updatedAt
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      Subjects {
        nextToken
      }
      createdAt
      updatedAt
      schoolTeachersId
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      Subjects {
        nextToken
      }
      createdAt
      updatedAt
      schoolTeachersId
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      Subjects {
        nextToken
      }
      createdAt
      updatedAt
      schoolTeachersId
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Teachers {
        nextToken
      }
      Students {
        nextToken
      }
      Subjects {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Teachers {
        nextToken
      }
      Students {
        nextToken
      }
      Subjects {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Teachers {
        nextToken
      }
      Students {
        nextToken
      }
      Subjects {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createClasses = /* GraphQL */ `
  mutation CreateClasses(
    $input: CreateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    createClasses(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Students {
        nextToken
      }
      SubjectID
      LevelID
      RegistrationCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClasses = /* GraphQL */ `
  mutation UpdateClasses(
    $input: UpdateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    updateClasses(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Students {
        nextToken
      }
      SubjectID
      LevelID
      RegistrationCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClasses = /* GraphQL */ `
  mutation DeleteClasses(
    $input: DeleteClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    deleteClasses(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Students {
        nextToken
      }
      SubjectID
      LevelID
      RegistrationCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createStudentClassroom = /* GraphQL */ `
  mutation CreateStudentClassroom(
    $input: CreateStudentClassroomInput!
    $condition: ModelStudentClassroomConditionInput
  ) {
    createStudentClassroom(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      ClassRef {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SubjectID
        LevelID
        RegistrationCode
        createdAt
        updatedAt
        owner
      }
      SubjectID
      LevelID
      ProfileID
      StudentID
      createdAt
      updatedAt
      classesStudentsId
      studentStudentClassroomsId
      owner
    }
  }
`;
export const updateStudentClassroom = /* GraphQL */ `
  mutation UpdateStudentClassroom(
    $input: UpdateStudentClassroomInput!
    $condition: ModelStudentClassroomConditionInput
  ) {
    updateStudentClassroom(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      ClassRef {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SubjectID
        LevelID
        RegistrationCode
        createdAt
        updatedAt
        owner
      }
      SubjectID
      LevelID
      ProfileID
      StudentID
      createdAt
      updatedAt
      classesStudentsId
      studentStudentClassroomsId
      owner
    }
  }
`;
export const deleteStudentClassroom = /* GraphQL */ `
  mutation DeleteStudentClassroom(
    $input: DeleteStudentClassroomInput!
    $condition: ModelStudentClassroomConditionInput
  ) {
    deleteStudentClassroom(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      ClassRef {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SubjectID
        LevelID
        RegistrationCode
        createdAt
        updatedAt
        owner
      }
      SubjectID
      LevelID
      ProfileID
      StudentID
      createdAt
      updatedAt
      classesStudentsId
      studentStudentClassroomsId
      owner
    }
  }
`;
export const createAssignments = /* GraphQL */ `
  mutation CreateAssignments(
    $input: CreateAssignmentsInput!
    $condition: ModelAssignmentsConditionInput
  ) {
    createAssignments(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SubjectID
      LevelID
      classroomID
      DueDate
      Status
      Questions
      createdAt
      updatedAt
    }
  }
`;
export const updateAssignments = /* GraphQL */ `
  mutation UpdateAssignments(
    $input: UpdateAssignmentsInput!
    $condition: ModelAssignmentsConditionInput
  ) {
    updateAssignments(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SubjectID
      LevelID
      classroomID
      DueDate
      Status
      Questions
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssignments = /* GraphQL */ `
  mutation DeleteAssignments(
    $input: DeleteAssignmentsInput!
    $condition: ModelAssignmentsConditionInput
  ) {
    deleteAssignments(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SubjectID
      LevelID
      classroomID
      DueDate
      Status
      Questions
      createdAt
      updatedAt
    }
  }
`;
export const createStudentAssignments = /* GraphQL */ `
  mutation CreateStudentAssignments(
    $input: CreateStudentAssignmentsInput!
    $condition: ModelStudentAssignmentsConditionInput
  ) {
    createStudentAssignments(input: $input, condition: $condition) {
      id
      AssignmentID
      ProfileID
      Status
      CreatedDate
      LastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentAssignments = /* GraphQL */ `
  mutation UpdateStudentAssignments(
    $input: UpdateStudentAssignmentsInput!
    $condition: ModelStudentAssignmentsConditionInput
  ) {
    updateStudentAssignments(input: $input, condition: $condition) {
      id
      AssignmentID
      ProfileID
      Status
      CreatedDate
      LastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentAssignments = /* GraphQL */ `
  mutation DeleteStudentAssignments(
    $input: DeleteStudentAssignmentsInput!
    $condition: ModelStudentAssignmentsConditionInput
  ) {
    deleteStudentAssignments(input: $input, condition: $condition) {
      id
      AssignmentID
      ProfileID
      Status
      CreatedDate
      LastUpdated
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      ProfileID
      StudentClassrooms {
        nextToken
      }
      createdAt
      updatedAt
      schoolStudentsId
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      ProfileID
      StudentClassrooms {
        nextToken
      }
      createdAt
      updatedAt
      schoolStudentsId
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      ProfileID
      StudentClassrooms {
        nextToken
      }
      createdAt
      updatedAt
      schoolStudentsId
    }
  }
`;
export const updateDataRemovalRequest = /* GraphQL */ `
  mutation UpdateDataRemovalRequest(
    $input: UpdateDataRemovalRequestInput!
    $condition: ModelDataRemovalRequestConditionInput
  ) {
    updateDataRemovalRequest(input: $input, condition: $condition) {
      id
      Name
      EmailAddress
      UserName
      RequestDescription
      AdditionalInformation
      RequestorData
      RequestDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteDataRemovalRequest = /* GraphQL */ `
  mutation DeleteDataRemovalRequest(
    $input: DeleteDataRemovalRequestInput!
    $condition: ModelDataRemovalRequestConditionInput
  ) {
    deleteDataRemovalRequest(input: $input, condition: $condition) {
      id
      Name
      EmailAddress
      UserName
      RequestDescription
      AdditionalInformation
      RequestorData
      RequestDate
      createdAt
      updatedAt
    }
  }
`;
export const updateUserFeedback = /* GraphQL */ `
  mutation UpdateUserFeedback(
    $input: UpdateUserFeedbackInput!
    $condition: ModelUserFeedbackConditionInput
  ) {
    updateUserFeedback(input: $input, condition: $condition) {
      id
      userID
      feedbackType
      feedbackText
      feedbackDate
      feedbackStatus
      feedbackContext
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserFeedback = /* GraphQL */ `
  mutation DeleteUserFeedback(
    $input: DeleteUserFeedbackInput!
    $condition: ModelUserFeedbackConditionInput
  ) {
    deleteUserFeedback(input: $input, condition: $condition) {
      id
      userID
      feedbackType
      feedbackText
      feedbackDate
      feedbackStatus
      feedbackContext
      createdAt
      updatedAt
    }
  }
`;
export const createDataRemovalRequest = /* GraphQL */ `
  mutation CreateDataRemovalRequest(
    $input: CreateDataRemovalRequestInput!
    $condition: ModelDataRemovalRequestConditionInput
  ) {
    createDataRemovalRequest(input: $input, condition: $condition) {
      id
      Name
      EmailAddress
      UserName
      RequestDescription
      AdditionalInformation
      RequestorData
      RequestDate
      createdAt
      updatedAt
    }
  }
`;
export const createUserFeedback = /* GraphQL */ `
  mutation CreateUserFeedback(
    $input: CreateUserFeedbackInput!
    $condition: ModelUserFeedbackConditionInput
  ) {
    createUserFeedback(input: $input, condition: $condition) {
      id
      userID
      feedbackType
      feedbackText
      feedbackDate
      feedbackStatus
      feedbackContext
      createdAt
      updatedAt
    }
  }
`;
