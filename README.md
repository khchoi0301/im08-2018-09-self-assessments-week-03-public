# Week 03 Self Assessment

## Guidelines

코드스테이츠는 Assessments 를 통해서도 수강생들이 최근에 학습한 부분들을 얼마나 잘 이해했는지 판단할 수 있습니다.

- Assessment 동안 휴대폰을 사용하지 마세요.
- 코드스테이츠 repo 를 먼저 fork 하고 본인 컴퓨터에 clone 하세요.
- 최소한 매 문제마다 한번씩 커밋을 작성하세요.

  - 팁: 커밋하기전에 예상한것처럼 코드가 작동하는지 쉽게 테스트할 수 있는 크롬 Console, [JSFiddle](https://jsfiddle.net/) 같은 도구를 활용하세요.
- 모든 문제를 최소한 조금이라도 풀려고 시도하세요. 문제에 아무 시도도 하지않고 작업했던 흔적이 없는것보다 코멘트를 몇줄이라도 작성하던가 pseudo-code 를 작성하는게 훨씬 더 좋습니다.
- 제 시간에 맞춰 pull request 를 꼭 제출하세요. 끝나기 최소한 몇분전에 pull request 를 할 시간을 가지세요.
- Assessment 를 마친후에 본인이 생각하기에 잘 이해하지 못한 문제들이 있다고 생각하면, 그 주제에 대해 더 학습할 시간을 가능한 빨리 가지세요.

## Grading Outline

- [ ] node-req-count
- [ ] Async-word-count

## Using and Referencing Outside Resources

각 문제들에는 참고 가능한 외부자료들의 목록이 포함되어 있습니다. 테스트중에 이전에 본인이 풀었던 코드, 다른 사람이 올린 코드등을 보는건 금지되어 있습니다. 참고 가능한 외부자료들의 목록 이외에 본인이 문제를 풀때 참고했던 자료들이 있다면 그 자료들의 목록을 각 문제에 코멘트로 적어주시기 바랍니다.

## Self-Grading Process

각 문제들을 푼 후, `README.md` 파일을 수정해서 grade 를 작성하시면 됩니다. 위의 Grading Outline 섹션의 [ ] 에 grade 를 스스로 매겨서 적길 바랍니다. pull request 를 날릴때 코멘트에도 grade 를 적어주세요. ([Grading Scale](/grading-outline.md) 를 참고)

## Submitting Solutions

Solutions 은 [Pull Request](https://help.github.com/articles/using-pull-requests) 를 통해 제출합니다. 아래 순서대로 제출해주세요:

1. **여러분의 fork** 에서 `Pull Requests` 를 선택하고, `New pull request` 를 생성합니다.
2. Pull Request 의 comment block 에 Grading Outline 을 채워넣고 복사해 붙입니다. [grading-outline](/grading-outline.md) 참고
3. `Send pull request` 를 클릭합니다.

---


## Node

Finish implementing the provided HTTP request handler
  * [Complete] POSTing to a route should increment the endpoint's count on `globalCounter`.
  * [Complete] GETting from a route should return the value stored at that property on `globalCounter`.

You can start the server by running `node index.js`, and test it with [Postman](https://www.getpostman.com/) or from Terminal with `curl`

```sh
# GET /prop1
curl 127.0.0.1:8000/prop1

# POST /prop1
curl -X POST 127.0.0.1:8000/prop1
```

### Example
* A POST to `/prop1` should set `globalCounter.prop1 = 1`
* A subsequent GET to `/prop1` should return `1`
* A subsequent POST to `/prop1` should set `globalCounter.prop1 = 2`
* A subsequent GET to `/prop1` should return `2`
* A subsequent GET to `/prop2` should return an empty response, as it has not yet been set.

## Async word count

Inside `async-word-count.js`, complete `getTotalWordCount`. `getTotalWordCount` should pass the combined word count of the files located at `filePathOne` and `filePathTwo` to the `callback` following proper node style convention

- [Complete] Be sure to handle errors at each step
- [Complete] Do not use promises

### Available Resources for this Prompt
* React Docs
* MDN
