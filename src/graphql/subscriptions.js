/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onCreateUsers(filter: $filter, owner: $owner) {
      Email
      Name
      NoOfProfiles
      Profiles {
        nextToken
        __typename
      }
      LastLogin
      id
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onUpdateUsers(filter: $filter, owner: $owner) {
      Email
      Name
      NoOfProfiles
      Profiles {
        nextToken
        __typename
      }
      LastLogin
      id
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers(
    $filter: ModelSubscriptionUsersFilterInput
    $owner: String
  ) {
    onDeleteUsers(filter: $filter, owner: $owner) {
      Email
      Name
      NoOfProfiles
      Profiles {
        nextToken
        __typename
      }
      LastLogin
      id
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
      UserRef {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
        __typename
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
      __typename
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
      UserRef {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
        __typename
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
      __typename
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
      UserRef {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
        __typename
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
      __typename
    }
  }
`;
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onCreateSubject(filter: $filter) {
      id
      Name
      Description
      IsActive
      IsPremium
      IsTest
      Locale
      Levels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      teacherSubjectsId
      schoolSubjectsId
      __typename
    }
  }
`;
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onUpdateSubject(filter: $filter) {
      id
      Name
      Description
      IsActive
      IsPremium
      IsTest
      Locale
      Levels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      teacherSubjectsId
      schoolSubjectsId
      __typename
    }
  }
`;
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onDeleteSubject(filter: $filter) {
      id
      Name
      Description
      IsActive
      IsPremium
      IsTest
      Locale
      Levels {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      teacherSubjectsId
      schoolSubjectsId
      __typename
    }
  }
`;
export const onCreateLevel = /* GraphQL */ `
  subscription OnCreateLevel($filter: ModelSubscriptionLevelFilterInput) {
    onCreateLevel(filter: $filter) {
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
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      LocalizedDescription
      Chapters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLevel = /* GraphQL */ `
  subscription OnUpdateLevel($filter: ModelSubscriptionLevelFilterInput) {
    onUpdateLevel(filter: $filter) {
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
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      LocalizedDescription
      Chapters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLevel = /* GraphQL */ `
  subscription OnDeleteLevel($filter: ModelSubscriptionLevelFilterInput) {
    onDeleteLevel(filter: $filter) {
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
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      LocalizedDescription
      Chapters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChapter = /* GraphQL */ `
  subscription OnCreateChapter(
    $filter: ModelSubscriptionChapterFilterInput
    $owner: String
  ) {
    onCreateChapter(filter: $filter, owner: $owner) {
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
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      ChapterOrder
      LocalizedDescription
      LocalizedAudioDescription
      Questions {
        nextToken
        __typename
      }
      Lessons {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateChapter = /* GraphQL */ `
  subscription OnUpdateChapter(
    $filter: ModelSubscriptionChapterFilterInput
    $owner: String
  ) {
    onUpdateChapter(filter: $filter, owner: $owner) {
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
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      ChapterOrder
      LocalizedDescription
      LocalizedAudioDescription
      Questions {
        nextToken
        __typename
      }
      Lessons {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteChapter = /* GraphQL */ `
  subscription OnDeleteChapter(
    $filter: ModelSubscriptionChapterFilterInput
    $owner: String
  ) {
    onDeleteChapter(filter: $filter, owner: $owner) {
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
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      LocalizedName
      ChapterOrder
      LocalizedDescription
      LocalizedAudioDescription
      Questions {
        nextToken
        __typename
      }
      Lessons {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion(
    $filter: ModelSubscriptionQuestionFilterInput
    $owner: String
  ) {
    onCreateQuestion(filter: $filter, owner: $owner) {
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
        LocalizedAudioDescription
        createdAt
        updatedAt
        owner
        __typename
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
      __typename
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion(
    $filter: ModelSubscriptionQuestionFilterInput
    $owner: String
  ) {
    onUpdateQuestion(filter: $filter, owner: $owner) {
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
        LocalizedAudioDescription
        createdAt
        updatedAt
        owner
        __typename
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
      __typename
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion(
    $filter: ModelSubscriptionQuestionFilterInput
    $owner: String
  ) {
    onDeleteQuestion(filter: $filter, owner: $owner) {
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
        LocalizedAudioDescription
        createdAt
        updatedAt
        owner
        __typename
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
      __typename
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson(
    $filter: ModelSubscriptionLessonFilterInput
    $owner: String
  ) {
    onCreateLesson(filter: $filter, owner: $owner) {
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
        LocalizedAudioDescription
        createdAt
        updatedAt
        owner
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      ShowAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson(
    $filter: ModelSubscriptionLessonFilterInput
    $owner: String
  ) {
    onUpdateLesson(filter: $filter, owner: $owner) {
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
        LocalizedAudioDescription
        createdAt
        updatedAt
        owner
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      ShowAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson(
    $filter: ModelSubscriptionLessonFilterInput
    $owner: String
  ) {
    onDeleteLesson(filter: $filter, owner: $owner) {
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
        LocalizedAudioDescription
        createdAt
        updatedAt
        owner
        __typename
      }
      Description
      IsActive
      IsPremium
      IsTest
      ShowAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateSubjectProfileLevel = /* GraphQL */ `
  subscription OnCreateSubjectProfileLevel(
    $filter: ModelSubscriptionSubjectProfileLevelFilterInput
    $owner: String
  ) {
    onCreateSubjectProfileLevel(filter: $filter, owner: $owner) {
      id
      subjectID
      profileID
      levelID
      LevelOrder
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateSubjectProfileLevel = /* GraphQL */ `
  subscription OnUpdateSubjectProfileLevel(
    $filter: ModelSubscriptionSubjectProfileLevelFilterInput
    $owner: String
  ) {
    onUpdateSubjectProfileLevel(filter: $filter, owner: $owner) {
      id
      subjectID
      profileID
      levelID
      LevelOrder
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteSubjectProfileLevel = /* GraphQL */ `
  subscription OnDeleteSubjectProfileLevel(
    $filter: ModelSubscriptionSubjectProfileLevelFilterInput
    $owner: String
  ) {
    onDeleteSubjectProfileLevel(filter: $filter, owner: $owner) {
      id
      subjectID
      profileID
      levelID
      LevelOrder
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateScore = /* GraphQL */ `
  subscription OnCreateScore(
    $filter: ModelSubscriptionScoreFilterInput
    $owner: String
  ) {
    onCreateScore(filter: $filter, owner: $owner) {
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
      __typename
    }
  }
`;
export const onUpdateScore = /* GraphQL */ `
  subscription OnUpdateScore(
    $filter: ModelSubscriptionScoreFilterInput
    $owner: String
  ) {
    onUpdateScore(filter: $filter, owner: $owner) {
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
      __typename
    }
  }
`;
export const onDeleteScore = /* GraphQL */ `
  subscription OnDeleteScore(
    $filter: ModelSubscriptionScoreFilterInput
    $owner: String
  ) {
    onDeleteScore(filter: $filter, owner: $owner) {
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
      __typename
    }
  }
`;
export const onCreateProfileScoreSummary = /* GraphQL */ `
  subscription OnCreateProfileScoreSummary(
    $filter: ModelSubscriptionProfileScoreSummaryFilterInput
    $owner: String
  ) {
    onCreateProfileScoreSummary(filter: $filter, owner: $owner) {
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
      __typename
    }
  }
`;
export const onUpdateProfileScoreSummary = /* GraphQL */ `
  subscription OnUpdateProfileScoreSummary(
    $filter: ModelSubscriptionProfileScoreSummaryFilterInput
    $owner: String
  ) {
    onUpdateProfileScoreSummary(filter: $filter, owner: $owner) {
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
      __typename
    }
  }
`;
export const onDeleteProfileScoreSummary = /* GraphQL */ `
  subscription OnDeleteProfileScoreSummary(
    $filter: ModelSubscriptionProfileScoreSummaryFilterInput
    $owner: String
  ) {
    onDeleteProfileScoreSummary(filter: $filter, owner: $owner) {
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
      __typename
    }
  }
`;
export const onCreateBadges = /* GraphQL */ `
  subscription OnCreateBadges($filter: ModelSubscriptionBadgesFilterInput) {
    onCreateBadges(filter: $filter) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBadges = /* GraphQL */ `
  subscription OnUpdateBadges($filter: ModelSubscriptionBadgesFilterInput) {
    onUpdateBadges(filter: $filter) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBadges = /* GraphQL */ `
  subscription OnDeleteBadges($filter: ModelSubscriptionBadgesFilterInput) {
    onDeleteBadges(filter: $filter) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProfileBadges = /* GraphQL */ `
  subscription OnCreateProfileBadges(
    $filter: ModelSubscriptionProfileBadgesFilterInput
    $owner: String
  ) {
    onCreateProfileBadges(filter: $filter, owner: $owner) {
      id
      BadgeID
      BadgesCount
      ProfileID
      LastUpdated
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateProfileBadges = /* GraphQL */ `
  subscription OnUpdateProfileBadges(
    $filter: ModelSubscriptionProfileBadgesFilterInput
    $owner: String
  ) {
    onUpdateProfileBadges(filter: $filter, owner: $owner) {
      id
      BadgeID
      BadgesCount
      ProfileID
      LastUpdated
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteProfileBadges = /* GraphQL */ `
  subscription OnDeleteProfileBadges(
    $filter: ModelSubscriptionProfileBadgesFilterInput
    $owner: String
  ) {
    onDeleteProfileBadges(filter: $filter, owner: $owner) {
      id
      BadgeID
      BadgesCount
      ProfileID
      LastUpdated
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateImages = /* GraphQL */ `
  subscription OnCreateImages($filter: ModelSubscriptionImagesFilterInput) {
    onCreateImages(filter: $filter) {
      id
      Name
      Description
      Keywords
      IsActive
      ImageURL
      ImageType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateImages = /* GraphQL */ `
  subscription OnUpdateImages($filter: ModelSubscriptionImagesFilterInput) {
    onUpdateImages(filter: $filter) {
      id
      Name
      Description
      Keywords
      IsActive
      ImageURL
      ImageType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteImages = /* GraphQL */ `
  subscription OnDeleteImages($filter: ModelSubscriptionImagesFilterInput) {
    onDeleteImages(filter: $filter) {
      id
      Name
      Description
      Keywords
      IsActive
      ImageURL
      ImageType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      Subjects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      schoolTeachersId
      __typename
    }
  }
`;
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      Subjects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      schoolTeachersId
      __typename
    }
  }
`;
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SchoolID
      Subjects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      schoolTeachersId
      __typename
    }
  }
`;
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Teachers {
        nextToken
        __typename
      }
      Students {
        nextToken
        __typename
      }
      Subjects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Teachers {
        nextToken
        __typename
      }
      Students {
        nextToken
        __typename
      }
      Subjects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Teachers {
        nextToken
        __typename
      }
      Students {
        nextToken
        __typename
      }
      Subjects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateClasses = /* GraphQL */ `
  subscription OnCreateClasses(
    $filter: ModelSubscriptionClassesFilterInput
    $owner: String
  ) {
    onCreateClasses(filter: $filter, owner: $owner) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Students {
        nextToken
        __typename
      }
      Assignments {
        nextToken
        __typename
      }
      SubjectID
      LevelID
      RegistrationCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateClasses = /* GraphQL */ `
  subscription OnUpdateClasses(
    $filter: ModelSubscriptionClassesFilterInput
    $owner: String
  ) {
    onUpdateClasses(filter: $filter, owner: $owner) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Students {
        nextToken
        __typename
      }
      Assignments {
        nextToken
        __typename
      }
      SubjectID
      LevelID
      RegistrationCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteClasses = /* GraphQL */ `
  subscription OnDeleteClasses(
    $filter: ModelSubscriptionClassesFilterInput
    $owner: String
  ) {
    onDeleteClasses(filter: $filter, owner: $owner) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      Students {
        nextToken
        __typename
      }
      Assignments {
        nextToken
        __typename
      }
      SubjectID
      LevelID
      RegistrationCode
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateStudentClassroom = /* GraphQL */ `
  subscription OnCreateStudentClassroom(
    $filter: ModelSubscriptionStudentClassroomFilterInput
    $owner: String
  ) {
    onCreateStudentClassroom(filter: $filter, owner: $owner) {
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
        __typename
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
      __typename
    }
  }
`;
export const onUpdateStudentClassroom = /* GraphQL */ `
  subscription OnUpdateStudentClassroom(
    $filter: ModelSubscriptionStudentClassroomFilterInput
    $owner: String
  ) {
    onUpdateStudentClassroom(filter: $filter, owner: $owner) {
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
        __typename
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
      __typename
    }
  }
`;
export const onDeleteStudentClassroom = /* GraphQL */ `
  subscription OnDeleteStudentClassroom(
    $filter: ModelSubscriptionStudentClassroomFilterInput
    $owner: String
  ) {
    onDeleteStudentClassroom(filter: $filter, owner: $owner) {
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
        __typename
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
      __typename
    }
  }
`;
export const onCreateAssignments = /* GraphQL */ `
  subscription OnCreateAssignments(
    $filter: ModelSubscriptionAssignmentsFilterInput
    $owner: String
  ) {
    onCreateAssignments(filter: $filter, owner: $owner) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SubjectID
      LevelID
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
        __typename
      }
      StudentAssignments {
        nextToken
        __typename
      }
      DueDate
      Status
      Questions
      createdAt
      updatedAt
      classesAssignmentsId
      owner
      __typename
    }
  }
`;
export const onUpdateAssignments = /* GraphQL */ `
  subscription OnUpdateAssignments(
    $filter: ModelSubscriptionAssignmentsFilterInput
    $owner: String
  ) {
    onUpdateAssignments(filter: $filter, owner: $owner) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SubjectID
      LevelID
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
        __typename
      }
      StudentAssignments {
        nextToken
        __typename
      }
      DueDate
      Status
      Questions
      createdAt
      updatedAt
      classesAssignmentsId
      owner
      __typename
    }
  }
`;
export const onDeleteAssignments = /* GraphQL */ `
  subscription OnDeleteAssignments(
    $filter: ModelSubscriptionAssignmentsFilterInput
    $owner: String
  ) {
    onDeleteAssignments(filter: $filter, owner: $owner) {
      id
      Name
      Description
      IsActive
      ImageURL
      ImageType
      SubjectID
      LevelID
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
        __typename
      }
      StudentAssignments {
        nextToken
        __typename
      }
      DueDate
      Status
      Questions
      createdAt
      updatedAt
      classesAssignmentsId
      owner
      __typename
    }
  }
`;
export const onCreateStudentAssignments = /* GraphQL */ `
  subscription OnCreateStudentAssignments(
    $filter: ModelSubscriptionStudentAssignmentsFilterInput
  ) {
    onCreateStudentAssignments(filter: $filter) {
      id
      AssignmentRef {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SubjectID
        LevelID
        DueDate
        Status
        Questions
        createdAt
        updatedAt
        classesAssignmentsId
        owner
        __typename
      }
      ProfileID
      Status
      CreatedDate
      LastUpdated
      createdAt
      updatedAt
      assignmentsStudentAssignmentsId
      __typename
    }
  }
`;
export const onUpdateStudentAssignments = /* GraphQL */ `
  subscription OnUpdateStudentAssignments(
    $filter: ModelSubscriptionStudentAssignmentsFilterInput
  ) {
    onUpdateStudentAssignments(filter: $filter) {
      id
      AssignmentRef {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SubjectID
        LevelID
        DueDate
        Status
        Questions
        createdAt
        updatedAt
        classesAssignmentsId
        owner
        __typename
      }
      ProfileID
      Status
      CreatedDate
      LastUpdated
      createdAt
      updatedAt
      assignmentsStudentAssignmentsId
      __typename
    }
  }
`;
export const onDeleteStudentAssignments = /* GraphQL */ `
  subscription OnDeleteStudentAssignments(
    $filter: ModelSubscriptionStudentAssignmentsFilterInput
  ) {
    onDeleteStudentAssignments(filter: $filter) {
      id
      AssignmentRef {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SubjectID
        LevelID
        DueDate
        Status
        Questions
        createdAt
        updatedAt
        classesAssignmentsId
        owner
        __typename
      }
      ProfileID
      Status
      CreatedDate
      LastUpdated
      createdAt
      updatedAt
      assignmentsStudentAssignmentsId
      __typename
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      schoolStudentsId
      __typename
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      schoolStudentsId
      __typename
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      schoolStudentsId
      __typename
    }
  }
`;
export const onCreateDataRemovalRequest = /* GraphQL */ `
  subscription OnCreateDataRemovalRequest(
    $filter: ModelSubscriptionDataRemovalRequestFilterInput
  ) {
    onCreateDataRemovalRequest(filter: $filter) {
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
      __typename
    }
  }
`;
export const onUpdateDataRemovalRequest = /* GraphQL */ `
  subscription OnUpdateDataRemovalRequest(
    $filter: ModelSubscriptionDataRemovalRequestFilterInput
  ) {
    onUpdateDataRemovalRequest(filter: $filter) {
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
      __typename
    }
  }
`;
export const onDeleteDataRemovalRequest = /* GraphQL */ `
  subscription OnDeleteDataRemovalRequest(
    $filter: ModelSubscriptionDataRemovalRequestFilterInput
  ) {
    onDeleteDataRemovalRequest(filter: $filter) {
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
      __typename
    }
  }
`;
export const onCreateUserFeedback = /* GraphQL */ `
  subscription OnCreateUserFeedback(
    $filter: ModelSubscriptionUserFeedbackFilterInput
  ) {
    onCreateUserFeedback(filter: $filter) {
      id
      userID
      feedbackType
      feedbackText
      feedbackDate
      feedbackStatus
      feedbackContext
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserFeedback = /* GraphQL */ `
  subscription OnUpdateUserFeedback(
    $filter: ModelSubscriptionUserFeedbackFilterInput
  ) {
    onUpdateUserFeedback(filter: $filter) {
      id
      userID
      feedbackType
      feedbackText
      feedbackDate
      feedbackStatus
      feedbackContext
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserFeedback = /* GraphQL */ `
  subscription OnDeleteUserFeedback(
    $filter: ModelSubscriptionUserFeedbackFilterInput
  ) {
    onDeleteUserFeedback(filter: $filter) {
      id
      userID
      feedbackType
      feedbackText
      feedbackDate
      feedbackStatus
      feedbackContext
      createdAt
      updatedAt
      __typename
    }
  }
`;
