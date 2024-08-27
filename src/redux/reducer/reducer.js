let initialState ={
    contactList:[],
    keyword: '',
};

function reducer(state=initialState, action) {
    
   // 객체(object) destructuring 문법!
    const {type, payload} = action;

    switch (type){  // (action.type) => (type)
        case "ADD_INFO":
            return {
                // ...state, contactList:[
                //     ...state.contactList,{name: action.payload.name,phoneNumber: action.payload.phoneNumber},
                // ],

                ...state, contactList:[
                    ...state.contactList,{
                        name: payload.name, 
                        phoneNumber: payload.phoneNumber,
                    },
                ],
            };

            case "SEARCH_BY_NAME":
                return {
                    ...state, keyword: payload.keyword,
                };
            default: 
               return{...state}
    }
}

export default reducer;

// Action 지침을 갖고 있는 곳이다.