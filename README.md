# Thoughts and motivations

I have been exploring some of React's new and re-worked features as of late so I decided to use both Styled Components and the new Context, with some of the new hooks. This, paired together with my "only as an experiment" experience with GraphQL, might not have been the optimal approach during "VAB-ruary" and the chaos at home. It did however make it more interesting and I learned a lot in the process.

Given the instructions not to use too many external libraries I decided to use GraphQL without both a library and a server. I loose out on cacheing and performance, but I did get to focus on how it works under the hood a little bit more. In retrospect I could propbably have saved some time and also improved percieved performance using i.e. Apollo or have fun with AWS Amplify. But; all in good time - there is certainly no shortage of resources to study around GraphQL today.

Apart from this; the task was pretty straight forward. If I had some more time I would probably spend a little time re-factoring and cleaning up the Context code. I know there are some hooks I can use to mimic Redux i.e. Another thing I left out intentionally was testing.

Enjoy reading the code, I hope it is not too hard to digest and feel free to ask me any questions.

## How to run

You first need to create a [GitHub access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).

First run `npm i` to install dependencies; then run `GH_TOKEN=token npm start` (where `token` is the GitHub access token created in the previous step) to view the application.

If you run _Windows_, like me, the correct line to run the `start` script is: `$env:GH_TOKEN="token"; npm start`.
