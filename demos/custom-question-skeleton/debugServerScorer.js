
console.log(`
==============================================================================================
THE SCRIPT BELOW IS BEING USED TO TEST THE SERVER SIDE SCORING FOR YOUR CUSTOM QUESTION
----
Update the questionResponseJson with your question json & response
==============================================================================================
`);

// QuestionResponseJson that will be used to test your Scorer logic
const questionResponseJson = {
   question: {
       response_id: 'custom-question-skeleton-response-id',
       type: "custom",
          stimulus: "What is 4 times 82?",
          js: {
            question: "/dist/question.js",
            scorer: "/dist/scorer.js"
          },
          css: "/dist/question.css",
          instant_feedback: true,
          valid_response: "328",
          max_score: 1
   },
   response: {
    type: "object",
    value: {
        "hundreds": 3,
        "tens": 2,
        "ones": 8,
    }
   }
};

// Path to the scorer file that you need to debug
const scorerUrl = './dist/scorer.js';

// Mock LearnosityAmd object that will be used to transform the scorer into a class that we can use to debug later on
global.LearnosityAmd = {
    define: ([], resolveCallback) => {
        if (!resolveCallback) {
            throw new Error('No callback to resolve Scorer exists');
        }

        const result = resolveCallback();

        if (!result.Scorer) {
            throw new Error('No Scorer class');
        }

        runTest(result.Scorer, questionResponseJson.question, questionResponseJson.response);
    }
};

// Load the Scorer
require(scorerUrl);

function runTest(Scorer, question, response) {
    const scorer = new Scorer(question, response);

    console.log(`
**************
TEST OUTPUT
**************
    `);

    console.log('isValid:', scorer.isValid());
    console.log('validateIndividualResponses:', scorer.validateIndividualResponses());
    console.log('score:', scorer.score());
    console.log('score:', scorer.maxScore());
    console.log('canValidateResponse:', scorer.canValidateResponse());
}
