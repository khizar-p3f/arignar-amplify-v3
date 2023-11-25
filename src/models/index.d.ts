import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerQuestionsResponse = {
  readonly items?: (Question | null)[] | null;
}

type LazyQuestionsResponse = {
  readonly items: AsyncCollection<Question>;
}

export declare type QuestionsResponse = LazyLoading extends LazyLoadingDisabled ? EagerQuestionsResponse : LazyQuestionsResponse

export declare const QuestionsResponse: (new (init: ModelInit<QuestionsResponse>) => QuestionsResponse)

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email: string;
  readonly Name: string;
  readonly NoOfProfiles?: number | null;
  readonly Profiles?: (Profile | null)[] | null;
  readonly LastLogin?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email: string;
  readonly Name: string;
  readonly NoOfProfiles?: number | null;
  readonly Profiles: AsyncCollection<Profile>;
  readonly LastLogin?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserRef?: Users | null;
  readonly Name: string;
  readonly Age?: number | null;
  readonly PictureURL?: string | null;
  readonly IsDefault?: boolean | null;
  readonly RewardsScored?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersProfilesId?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserRef: AsyncItem<Users | undefined>;
  readonly Name: string;
  readonly Age?: number | null;
  readonly PictureURL?: string | null;
  readonly IsDefault?: boolean | null;
  readonly RewardsScored?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersProfilesId?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerSubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly Locale?: string | null;
  readonly Levels?: (Level | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teacherSubjectsId?: string | null;
  readonly schoolSubjectsId?: string | null;
}

type LazySubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly Locale?: string | null;
  readonly Levels: AsyncCollection<Level>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teacherSubjectsId?: string | null;
  readonly schoolSubjectsId?: string | null;
}

export declare type Subject = LazyLoading extends LazyLoadingDisabled ? EagerSubject : LazySubject

export declare const Subject: (new (init: ModelInit<Subject>) => Subject) & {
  copyOf(source: Subject, mutator: (draft: MutableModel<Subject>) => MutableModel<Subject> | void): Subject;
}

type EagerLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Level, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly subjectID: string;
  readonly SubjectObj: Subject;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly LocalizedName?: string | null;
  readonly LocalizedDescription?: string | null;
  readonly Chapters?: (Chapter | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Level, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly subjectID: string;
  readonly SubjectObj: AsyncItem<Subject>;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly LocalizedName?: string | null;
  readonly LocalizedDescription?: string | null;
  readonly Chapters: AsyncCollection<Chapter>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Level = LazyLoading extends LazyLoadingDisabled ? EagerLevel : LazyLevel

export declare const Level: (new (init: ModelInit<Level>) => Level) & {
  copyOf(source: Level, mutator: (draft: MutableModel<Level>) => MutableModel<Level> | void): Level;
}

type EagerChapter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chapter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly levelID: string;
  readonly LevelObj: Level;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly LocalizedName?: string | null;
  readonly ChapterOrder?: number | null;
  readonly LocalizedDescription?: string | null;
  readonly LocalizedAudioDescription?: string | null;
  readonly Questions?: (Question | null)[] | null;
  readonly Lessons?: (Lesson | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChapter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chapter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly levelID: string;
  readonly LevelObj: AsyncItem<Level>;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly LocalizedName?: string | null;
  readonly ChapterOrder?: number | null;
  readonly LocalizedDescription?: string | null;
  readonly LocalizedAudioDescription?: string | null;
  readonly Questions: AsyncCollection<Question>;
  readonly Lessons: AsyncCollection<Lesson>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chapter = LazyLoading extends LazyLoadingDisabled ? EagerChapter : LazyChapter

export declare const Chapter: (new (init: ModelInit<Chapter>) => Chapter) & {
  copyOf(source: Chapter, mutator: (draft: MutableModel<Chapter>) => MutableModel<Chapter> | void): Chapter;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly LocalizedName?: string | null;
  readonly LocalizedDescription?: string | null;
  readonly LocalizedAudioDescription?: string | null;
  readonly chapterID: string;
  readonly ChapterObj: Chapter;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly Type?: string | null;
  readonly Skill?: string | null;
  readonly QuestionObject?: string | null;
  readonly QuestionOrder?: number | null;
  readonly NoOfQuestions?: number | null;
  readonly SuggestedRewardPoints?: number | null;
  readonly PassPercentage?: number | null;
  readonly Version?: number | null;
  readonly TimeAllowed?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly LocalizedName?: string | null;
  readonly LocalizedDescription?: string | null;
  readonly LocalizedAudioDescription?: string | null;
  readonly chapterID: string;
  readonly ChapterObj: AsyncItem<Chapter>;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly Type?: string | null;
  readonly Skill?: string | null;
  readonly QuestionObject?: string | null;
  readonly QuestionOrder?: number | null;
  readonly NoOfQuestions?: number | null;
  readonly SuggestedRewardPoints?: number | null;
  readonly PassPercentage?: number | null;
  readonly Version?: number | null;
  readonly TimeAllowed?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly LocalizedName?: string | null;
  readonly LocalizedDescription?: string | null;
  readonly LocalizedAudioDescription?: string | null;
  readonly chapterID: string;
  readonly ChapterObj: Chapter;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly ShowAds?: boolean | null;
  readonly LessonOrder?: number | null;
  readonly Type?: string | null;
  readonly Skill?: string | null;
  readonly LessonObject?: string | null;
  readonly Version?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly LocalizedName?: string | null;
  readonly LocalizedDescription?: string | null;
  readonly LocalizedAudioDescription?: string | null;
  readonly chapterID: string;
  readonly ChapterObj: AsyncItem<Chapter>;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsPremium?: boolean | null;
  readonly IsTest?: boolean | null;
  readonly ShowAds?: boolean | null;
  readonly LessonOrder?: number | null;
  readonly Type?: string | null;
  readonly Skill?: string | null;
  readonly LessonObject?: string | null;
  readonly Version?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lesson = LazyLoading extends LazyLoadingDisabled ? EagerLesson : LazyLesson

export declare const Lesson: (new (init: ModelInit<Lesson>) => Lesson) & {
  copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

type EagerSubjectProfileLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubjectProfileLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subjectID: string;
  readonly profileID: string;
  readonly levelID: string;
  readonly LevelOrder?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubjectProfileLevel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubjectProfileLevel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subjectID: string;
  readonly profileID: string;
  readonly levelID: string;
  readonly LevelOrder?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubjectProfileLevel = LazyLoading extends LazyLoadingDisabled ? EagerSubjectProfileLevel : LazySubjectProfileLevel

export declare const SubjectProfileLevel: (new (init: ModelInit<SubjectProfileLevel>) => SubjectProfileLevel) & {
  copyOf(source: SubjectProfileLevel, mutator: (draft: MutableModel<SubjectProfileLevel>) => MutableModel<SubjectProfileLevel> | void): SubjectProfileLevel;
}

type EagerScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Score, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subjectProfileLevelID?: string | null;
  readonly QuestionID: string;
  readonly ChapterID: string;
  readonly Description?: string | null;
  readonly ScoredPoints?: number | null;
  readonly Status?: string | null;
  readonly TimeTaken?: number | null;
  readonly Attempts?: number | null;
  readonly Skill?: string | null;
  readonly LastTestTime?: string | null;
  readonly Answer?: string | null;
  readonly SubjectProfileType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Score, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subjectProfileLevelID?: string | null;
  readonly QuestionID: string;
  readonly ChapterID: string;
  readonly Description?: string | null;
  readonly ScoredPoints?: number | null;
  readonly Status?: string | null;
  readonly TimeTaken?: number | null;
  readonly Attempts?: number | null;
  readonly Skill?: string | null;
  readonly LastTestTime?: string | null;
  readonly Answer?: string | null;
  readonly SubjectProfileType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Score = LazyLoading extends LazyLoadingDisabled ? EagerScore : LazyScore

export declare const Score: (new (init: ModelInit<Score>) => Score) & {
  copyOf(source: Score, mutator: (draft: MutableModel<Score>) => MutableModel<Score> | void): Score;
}

type EagerProfileScoreSummary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileScoreSummary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SubjectProfileID: string;
  readonly TotalScore?: number | null;
  readonly ReadingScore?: number | null;
  readonly WritingScore?: number | null;
  readonly ListeningScore?: number | null;
  readonly SpeakingScore?: number | null;
  readonly CompletedExcersises?: number | null;
  readonly Status?: string | null;
  readonly Description?: string | null;
  readonly ReferenceID?: string | null;
  readonly ReferenceType?: string | null;
  readonly ScoreList?: string | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfileScoreSummary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileScoreSummary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SubjectProfileID: string;
  readonly TotalScore?: number | null;
  readonly ReadingScore?: number | null;
  readonly WritingScore?: number | null;
  readonly ListeningScore?: number | null;
  readonly SpeakingScore?: number | null;
  readonly CompletedExcersises?: number | null;
  readonly Status?: string | null;
  readonly Description?: string | null;
  readonly ReferenceID?: string | null;
  readonly ReferenceType?: string | null;
  readonly ScoreList?: string | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProfileScoreSummary = LazyLoading extends LazyLoadingDisabled ? EagerProfileScoreSummary : LazyProfileScoreSummary

export declare const ProfileScoreSummary: (new (init: ModelInit<ProfileScoreSummary>) => ProfileScoreSummary) & {
  copyOf(source: ProfileScoreSummary, mutator: (draft: MutableModel<ProfileScoreSummary>) => MutableModel<ProfileScoreSummary> | void): ProfileScoreSummary;
}

type EagerBadges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Badges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly ImageURL?: string | null;
  readonly IsActive?: boolean | null;
  readonly Type?: string | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBadges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Badges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly ImageURL?: string | null;
  readonly IsActive?: boolean | null;
  readonly Type?: string | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Badges = LazyLoading extends LazyLoadingDisabled ? EagerBadges : LazyBadges

export declare const Badges: (new (init: ModelInit<Badges>) => Badges) & {
  copyOf(source: Badges, mutator: (draft: MutableModel<Badges>) => MutableModel<Badges> | void): Badges;
}

type EagerProfileBadges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileBadges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BadgeID: string;
  readonly BadgesCount?: number | null;
  readonly ProfileID: string;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfileBadges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileBadges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BadgeID: string;
  readonly BadgesCount?: number | null;
  readonly ProfileID: string;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProfileBadges = LazyLoading extends LazyLoadingDisabled ? EagerProfileBadges : LazyProfileBadges

export declare const ProfileBadges: (new (init: ModelInit<ProfileBadges>) => ProfileBadges) & {
  copyOf(source: ProfileBadges, mutator: (draft: MutableModel<ProfileBadges>) => MutableModel<ProfileBadges> | void): ProfileBadges;
}

type EagerImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Images, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly Keywords?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Images, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly Keywords?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Images = LazyLoading extends LazyLoadingDisabled ? EagerImages : LazyImages

export declare const Images: (new (init: ModelInit<Images>) => Images) & {
  copyOf(source: Images, mutator: (draft: MutableModel<Images>) => MutableModel<Images> | void): Images;
}

type EagerTeacher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teacher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly SchoolID: string;
  readonly Subjects?: (Subject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly schoolTeachersId?: string | null;
}

type LazyTeacher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teacher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly SchoolID: string;
  readonly Subjects: AsyncCollection<Subject>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly schoolTeachersId?: string | null;
}

export declare type Teacher = LazyLoading extends LazyLoadingDisabled ? EagerTeacher : LazyTeacher

export declare const Teacher: (new (init: ModelInit<Teacher>) => Teacher) & {
  copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher>) => MutableModel<Teacher> | void): Teacher;
}

type EagerSchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly Teachers?: (Teacher | null)[] | null;
  readonly Students?: (Student | null)[] | null;
  readonly Subjects?: (Subject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly Teachers: AsyncCollection<Teacher>;
  readonly Students: AsyncCollection<Student>;
  readonly Subjects: AsyncCollection<Subject>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}

type EagerClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly Students?: (StudentClassroom | null)[] | null;
  readonly Assignments?: (Assignments | null)[] | null;
  readonly SubjectID: string;
  readonly LevelID: string;
  readonly RegistrationCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly Students: AsyncCollection<StudentClassroom>;
  readonly Assignments: AsyncCollection<Assignments>;
  readonly SubjectID: string;
  readonly LevelID: string;
  readonly RegistrationCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Classes = LazyLoading extends LazyLoadingDisabled ? EagerClasses : LazyClasses

export declare const Classes: (new (init: ModelInit<Classes>) => Classes) & {
  copyOf(source: Classes, mutator: (draft: MutableModel<Classes>) => MutableModel<Classes> | void): Classes;
}

type EagerStudentClassroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentClassroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly ClassRef?: Classes | null;
  readonly SubjectID: string;
  readonly LevelID: string;
  readonly ProfileID: string;
  readonly StudentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly classesStudentsId?: string | null;
  readonly studentStudentClassroomsId?: string | null;
}

type LazyStudentClassroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentClassroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly ClassRef: AsyncItem<Classes | undefined>;
  readonly SubjectID: string;
  readonly LevelID: string;
  readonly ProfileID: string;
  readonly StudentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly classesStudentsId?: string | null;
  readonly studentStudentClassroomsId?: string | null;
}

export declare type StudentClassroom = LazyLoading extends LazyLoadingDisabled ? EagerStudentClassroom : LazyStudentClassroom

export declare const StudentClassroom: (new (init: ModelInit<StudentClassroom>) => StudentClassroom) & {
  copyOf(source: StudentClassroom, mutator: (draft: MutableModel<StudentClassroom>) => MutableModel<StudentClassroom> | void): StudentClassroom;
}

type EagerAssignments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assignments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly SubjectID: string;
  readonly LevelID: string;
  readonly ClassRef?: Classes | null;
  readonly StudentAssignments?: (StudentAssignments | null)[] | null;
  readonly DueDate?: string | null;
  readonly Status?: string | null;
  readonly Questions?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly classesAssignmentsId?: string | null;
}

type LazyAssignments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assignments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly SubjectID: string;
  readonly LevelID: string;
  readonly ClassRef: AsyncItem<Classes | undefined>;
  readonly StudentAssignments: AsyncCollection<StudentAssignments>;
  readonly DueDate?: string | null;
  readonly Status?: string | null;
  readonly Questions?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly classesAssignmentsId?: string | null;
}

export declare type Assignments = LazyLoading extends LazyLoadingDisabled ? EagerAssignments : LazyAssignments

export declare const Assignments: (new (init: ModelInit<Assignments>) => Assignments) & {
  copyOf(source: Assignments, mutator: (draft: MutableModel<Assignments>) => MutableModel<Assignments> | void): Assignments;
}

type EagerStudentAssignments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentAssignments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AssignmentRef?: Assignments | null;
  readonly ProfileID: string;
  readonly Status?: string | null;
  readonly CreatedDate?: string | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assignmentsStudentAssignmentsId?: string | null;
}

type LazyStudentAssignments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentAssignments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly AssignmentRef: AsyncItem<Assignments | undefined>;
  readonly ProfileID: string;
  readonly Status?: string | null;
  readonly CreatedDate?: string | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assignmentsStudentAssignmentsId?: string | null;
}

export declare type StudentAssignments = LazyLoading extends LazyLoadingDisabled ? EagerStudentAssignments : LazyStudentAssignments

export declare const StudentAssignments: (new (init: ModelInit<StudentAssignments>) => StudentAssignments) & {
  copyOf(source: StudentAssignments, mutator: (draft: MutableModel<StudentAssignments>) => MutableModel<StudentAssignments> | void): StudentAssignments;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly SchoolID: string;
  readonly ProfileID: string;
  readonly StudentClassrooms?: (StudentClassroom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly schoolStudentsId?: string | null;
}

type LazyStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly IsActive?: boolean | null;
  readonly ImageURL?: string | null;
  readonly ImageType?: string | null;
  readonly SchoolID: string;
  readonly ProfileID: string;
  readonly StudentClassrooms: AsyncCollection<StudentClassroom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly schoolStudentsId?: string | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student) & {
  copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

type EagerDataRemovalRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataRemovalRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly EmailAddress?: string | null;
  readonly UserName?: string | null;
  readonly RequestDescription?: string | null;
  readonly AdditionalInformation?: string | null;
  readonly RequestorData?: string | null;
  readonly RequestDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDataRemovalRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataRemovalRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly EmailAddress?: string | null;
  readonly UserName?: string | null;
  readonly RequestDescription?: string | null;
  readonly AdditionalInformation?: string | null;
  readonly RequestorData?: string | null;
  readonly RequestDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DataRemovalRequest = LazyLoading extends LazyLoadingDisabled ? EagerDataRemovalRequest : LazyDataRemovalRequest

export declare const DataRemovalRequest: (new (init: ModelInit<DataRemovalRequest>) => DataRemovalRequest) & {
  copyOf(source: DataRemovalRequest, mutator: (draft: MutableModel<DataRemovalRequest>) => MutableModel<DataRemovalRequest> | void): DataRemovalRequest;
}

type EagerUserFeedback = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFeedback, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly feedbackType?: string | null;
  readonly feedbackText?: string | null;
  readonly feedbackDate?: string | null;
  readonly feedbackStatus?: string | null;
  readonly feedbackContext?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFeedback = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFeedback, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly feedbackType?: string | null;
  readonly feedbackText?: string | null;
  readonly feedbackDate?: string | null;
  readonly feedbackStatus?: string | null;
  readonly feedbackContext?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFeedback = LazyLoading extends LazyLoadingDisabled ? EagerUserFeedback : LazyUserFeedback

export declare const UserFeedback: (new (init: ModelInit<UserFeedback>) => UserFeedback) & {
  copyOf(source: UserFeedback, mutator: (draft: MutableModel<UserFeedback>) => MutableModel<UserFeedback> | void): UserFeedback;
}