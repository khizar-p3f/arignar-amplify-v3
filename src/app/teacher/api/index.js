import { API } from "aws-amplify";

export const teachersAPI = {
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
		const listAllClassesQuery = `  query ListClasses(
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
		const addClassQuery = `mutation CreateClasses(
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
        SubjectID
        LevelID
        RegistrationCode
        createdAt
        updatedAt
        owner
      }
    }`;
		try {
			const response = await API.graphql({
				query: addClassQuery,
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
