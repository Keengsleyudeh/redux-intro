import { createStore } from "redux";
const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "action/deposit" :
            return {...state, 
                balance: state.balance + action.payload
            }
        case "action/withdraw" :
            return {...state,
                balance: state.balance - action.payload
            }
        case "action/requestLoan" :
            if (state.loan > 0) return;
            // later
            return {...state,
                loan: action.payload
            }
        case "action/payLoan" :
            return {...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

store.dispatch({type: "action/deposit", payload: 500});

console.log(store.getState());
                                                                                            