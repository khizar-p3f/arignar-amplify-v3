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
};
