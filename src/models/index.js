// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Profile, Subject, Level, Chapter, Question, Lesson, SubjectProfileLevel, Score, ProfileScoreSummary, Badges, ProfileBadges, Images, Teacher, School, Classes, StudentClassroom, Assignments, StudentAssignments, Student, DataRemovalRequest, UserFeedback, QuestionsResponse } = initSchema(schema);

export {
  Users,
  Profile,
  Subject,
  Level,
  Chapter,
  Question,
  Lesson,
  SubjectProfileLevel,
  Score,
  ProfileScoreSummary,
  Badges,
  ProfileBadges,
  Images,
  Teacher,
  School,
  Classes,
  StudentClassroom,
  Assignments,
  StudentAssignments,
  Student,
  DataRemovalRequest,
  UserFeedback,
  QuestionsResponse
};