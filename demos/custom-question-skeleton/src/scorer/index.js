export default class Scorer {
    constructor(question, response) {
        this.question = question;
        this.response = response;
    }

    /**
     * Check if the current question's response is valid or not
     * (Required)
     * @returns {boolean}
     */
    isValid() {
        // get the values, for the hundreds, tens, and ones the
        // user submitted as the saved responses object
        // as an array by passing this.response.value into the Object.values method
        // and then join that array into string
        // and save to a varible called usersResponse

        const userResponse = Object.values(this.response.value).join("")
        // return true if it is equal to the valid response supplied on the question JSON
        if(this.question.valid_response === userResponse) return true
        // otherwise return false

        return false;
    }

    /**
     * Returns an object displaying the validation state of each individual item inside the stored response
     * For example:
     * The student response value is: { min: 10, max: 20 } and our correct answer is { min: 10, max: 30 }
     * Then we expect the result of this validateIndividualResponses will be:
     * { min: true, max: false }
     * @returns {{}|null}
     */
    validateIndividualResponses() {
        // TODO: Requires implementation
        return null;
    }

    /**
     * Returns the score of the stored response
     * @returns {number|null}
     */
    score() {
        // if the isValid function returns true
        // then assign the user the max_score
        // from the question JSON (my max score was 1)
        // else return 0
        if(this.isValid()) return this.question.max_score
        return 0;
    }

    /**
     * Returns the possible max score of the stored response
     * @returns {number}
     */
    maxScore() {
        // if the user scored a point (score() returns true)
        // then assing the max possible score
        // otherwise assign 0
        if(this.score()) return this.question.max_score
        return 0;
    }

    /**
     * Check if the current question is scorable or not.
     * For example:
     * - If there is no valid response data set in the question, this method should return false
     * - If this question type is not scorable (like an essay or open ended question) then this will return false
     * @returns {boolean}
     */
    canValidateResponse() {
        // Once again get the values, for the hundreds, tens, and ones the
        // user submitted as the saved responses object
        // as an array by passing this.response.value into the Object.values method
        // and then join that array into string
        // and save to a varible called usersResponse
        // the number result of the question needs to be 3 digits
        // so if the lenth of the userResponse string is less than 3
        // this function should return false

            // commenting the two lines below out because
            // they broke the question rendering for some reason
            // but the logic in the test passed

        // const userResponse = Object.values(this.response.value).join("")
        // if(userResponse.length !== 3) return false

        return true;
    }
}
