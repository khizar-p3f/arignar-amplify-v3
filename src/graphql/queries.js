/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const scanQuestions = /* GraphQL */ `
  query ScanQuestions {
    scanQuestions {
      items {
        id
        Name
        LocalizedName
        LocalizedDescription
        LocalizedAudioDescription
        chapterID
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
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Email
        Name
        NoOfProfiles
        LastLogin
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        LocalizedName
        LocalizedDescription
        LocalizedAudioDescription
        chapterID
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
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
      }
      Description
      IsActive
      IsPremium
      IsTest
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        LocalizedName
        LocalizedDescription
        LocalizedAudioDescription
        chapterID
        Description
        IsActive
        IsPremium
        IsTest
        LessonOrder
        Type
        Skill
        LessonObject
        Version
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSubjectProfileLevel = /* GraphQL */ `
  query GetSubjectProfileLevel($id: ID!) {
    getSubjectProfileLevel(id: $id) {
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
export const listSubjectProfileLevels = /* GraphQL */ `
  query ListSubjectProfileLevels(
    $filter: ModelSubjectProfileLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjectProfileLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subjectID
        profileID
        levelID
        LevelOrder
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getScore = /* GraphQL */ `
  query GetScore($id: ID!) {
    getScore(id: $id) {
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
export const listScores = /* GraphQL */ `
  query ListScores(
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;



export const getProfileScoreSummary = /* GraphQL */ `
  query GetProfileScoreSummary($id: ID!) {
    getProfileScoreSummary(id: $id) {
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
export const listProfileScoreSummaries = /* GraphQL */ `
  query ListProfileScoreSummaries(
    $filter: ModelProfileScoreSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileScoreSummaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBadges = /* GraphQL */ `
  query GetBadges($id: ID!) {
    getBadges(id: $id) {
      id
      Name
      Description
      ImageURL
      IsActive
      Type
      LastUpdated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBadges = /* GraphQL */ `
  query ListBadges(
    $filter: ModelBadgesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        ImageURL
        IsActive
        Type
        LastUpdated
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProfileBadges = /* GraphQL */ `
  query GetProfileBadges($id: ID!) {
    getProfileBadges(id: $id) {
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
export const listProfileBadges = /* GraphQL */ `
  query ListProfileBadges(
    $filter: ModelProfileBadgesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        BadgeID
        BadgesCount
        ProfileID
        LastUpdated
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getImages = /* GraphQL */ `
  query GetImages($id: ID!) {
    getImages(id: $id) {
      id
      Name
      Description
      Keywords
      IsActive
      IsPremium
      IsTest
      showAds
      LessonOrder
      Type
      Skill
      LessonObject
      Version
      ImageURL
      ImageType
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        Keywords
        IsActive
        IsPremium
        IsTest
        showAds
        LessonOrder
        Type
        Skill
        LessonObject
        Version
        ImageURL
        ImageType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
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
        ImageURL
        ImageType
        SchoolID
        createdAt
        updatedAt
        schoolTeachersId
      }
      nextToken
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClasses = /* GraphQL */ `
  query GetClasses($id: ID!) {
    getClasses(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStudentClassroom = /* GraphQL */ `
  query GetStudentClassroom($id: ID!) {
    getStudentClassroom(id: $id) {
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
export const listStudentClassrooms = /* GraphQL */ `
  query ListStudentClassrooms(
    $filter: ModelStudentClassroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentClassrooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
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
      nextToken
    }
  }
`;
export const getAssignments = /* GraphQL */ `
  query GetAssignments($id: ID!) {
    getAssignments(id: $id) {
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
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStudentAssignments = /* GraphQL */ `
  query GetStudentAssignments($id: ID!) {
    getStudentAssignments(id: $id) {
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
export const listStudentAssignments = /* GraphQL */ `
  query ListStudentAssignments(
    $filter: ModelStudentAssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        AssignmentID
        ProfileID
        Status
        CreatedDate
        LastUpdated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        IsActive
        ImageURL
        ImageType
        SchoolID
        ProfileID
        createdAt
        updatedAt
        schoolStudentsId
      }
      nextToken
    }
  }
`;
export const getDataRemovalRequest = /* GraphQL */ `
  query GetDataRemovalRequest($id: ID!) {
    getDataRemovalRequest(id: $id) {
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
export const listDataRemovalRequests = /* GraphQL */ `
  query ListDataRemovalRequests(
    $filter: ModelDataRemovalRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataRemovalRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserFeedback = /* GraphQL */ `
  query GetUserFeedback($id: ID!) {
    getUserFeedback(id: $id) {
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
export const listUserFeedbacks = /* GraphQL */ `
  query ListUserFeedbacks(
    $filter: ModelUserFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const questionsByChapter = /* GraphQL */ `
  query QuestionsByChapter(
    $chapterID: ID!
    $Name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByChapter(
      chapterID: $chapterID
      Name: $Name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        LocalizedName
        LocalizedDescription
        LocalizedAudioDescription
        chapterID
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
      }
      nextToken
    }
  }
`;
export const lessonsByChapter = /* GraphQL */ `
  query LessonsByChapter(
    $chapterID: ID!
    $Name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsByChapter(
      chapterID: $chapterID
      Name: $Name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        LocalizedName
        LocalizedDescription
        LocalizedAudioDescription
        chapterID
        Description
        IsActive
        IsPremium
        IsTest
        LessonOrder
        Type
        Skill
        LessonObject
        Version
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const scoresBySPL = /* GraphQL */ `
  query ScoresBySPL(
    $subjectProfileLevelID: String!
    $LastTestTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    scoresBySPL(
      subjectProfileLevelID: $subjectProfileLevelID
      LastTestTime: $LastTestTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const scoreSummaryBySPL = /* GraphQL */ `
  query ScoreSummaryBySPL(
    $SubjectProfileID: String!
    $ReferenceID: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProfileScoreSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ScoreSummaryBySPL(
      SubjectProfileID: $SubjectProfileID
      ReferenceID: $ReferenceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const imagesByImageName = /* GraphQL */ `
  query ImagesByImageName(
    $Name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ImagesByImageName(
      Name: $Name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLevel = /* GraphQL */ `
  query GetLevel($id: ID!) {
    getLevel(id: $id) {
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
export const listLevels = /* GraphQL */ `
  query ListLevels(
    $filter: ModelLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const levelsBySubject = /* GraphQL */ `
  query LevelsBySubject(
    $subjectID: ID!
    $Name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    levelsBySubject(
      subjectID: $subjectID
      Name: $Name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getChapter = /* GraphQL */ `
  query GetChapter($id: ID!) {
    getChapter(id: $id) {
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
    }
  }
`;
export const listChapters = /* GraphQL */ `
  query ListChapters(
    $filter: ModelChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
export const chaptersByLevel = /* GraphQL */ `
  query ChaptersByLevel(
    $levelID: ID!
    $Name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chaptersByLevel(
      levelID: $levelID
      Name: $Name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      }
      nextToken
    }
  }
`;
