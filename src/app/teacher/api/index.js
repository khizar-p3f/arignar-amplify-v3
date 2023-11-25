import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import * as mutations from "../../../graphql/mutations";

export const teachersAPI = {
	generateRegistrationCodeAPI: (codeLength) => {
		// generate Alphanumeric code of length codeLength
		const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = "";
		for (let i = codeLength; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	},
	listAllSubjectsAPI: async () => {
		const listAllSubjectsQuery = `query MyQuery {      
            listSubjects(limit: 10) {
              items {
                Description
                Name
                id
                Locale
                IsActive
                Levels {
                  items {
                    Description
                    IsActive
                    LocalizedDescription
                    LocalizedName
                    Name
                    id
                    Chapters(limit: 10) {
                      items {
                        Description
                        IsActive
                        LocalizedDescription
                        LocalizedName
                        Name
                        id
                        Questions {
                          items {
                            Description
                            IsActive
                            LocalizedDescription
                            LocalizedName
                            Name
                            NoOfQuestions
                            id
                          }
                        }
                        Lessons {
                          items {
                            Description
                            IsActive
                            LocalizedDescription
                            LocalizedName
                            Name                          
                            id
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          `;
		try {
			const response = await API.graphql({ query: listAllSubjectsQuery });
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	listAllClassesAPI: async () => {
		const listAllClassesQuery = `  query ListClasses {
      listAssignments {
        items {
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
      }
      listClasses{
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
          Students{
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
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }`;
		try {
			const response = await API.graphql({ query: listAllClassesQuery });
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	addClassAPI: async (classData) => {
		try {
			const response = await API.graphql({
				query: mutations.createClasses,
				variables: {
					input: classData,
				},
			});
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	updateClassAPI: async (classData) => {
		try {
			const response = await API.graphql({
				query: mutations.updateClasses,
				variables: {
					input: classData,
				},
			});
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};

export const getNameById = {
	getSubjectNameById: async (id, subjects) => {
		const subject = subjects.find((subject) => subject.id === id);
		console.log(subject.Name);
		return subject.Name;
	},
};
