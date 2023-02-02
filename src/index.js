/**
 * 태그 
 * @typedef {Object} Tag
 * @property {number} id - 아이디
 * @property {string} content - 태그 내용
 */

/**
 * 할 일
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료여부
 * @property {string} category - 카테고리
 * @property {Tag[]} [tags] - 태그들
 */


/**
 * 할 일을 추가 한다. 
 * @param {string} content - 할 일 내용
 * @param {string} category - 할 일의 카테고리
 * @param {Tag[]} [tags] - 태그들
 * @return {Todo} - 생성된 Todo
 */
function createTodo(content, category, tags){}

/**
 * 모든 할 일을 조회한다. 
 * @returns {Todo[]} - 모든 Todo
 */
function fetchAllTodo(){}

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} todoId - Todo의 아이디
 * @returns {Todo} - Todo
 */
function fetchTodo(todoId){}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {string=} content - 내용
 * @param {boolean=} isDone - 완료 여부
 * @param {string=} category - 카테고리
 * @param {Tag[]} [tags] - 태그
 * @returns {Todo} - 수정된 Todo
 */
function updateTodo(content, isDone, category, tags){}

/**
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} todoId - 할 일의 id
 * @param {number} tagId - 태그의 id
 * @param {string} updatedContent - 수정할 태그의 내용
 * @returns {Todo} - 수정된 Todo
 */
function updateTagOfTodo(todoId, tagId, updatedContent){}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} todoId - 할 일의 id
 */
function deleteTodo(todoId){}

/**
 * 모든 할 일을 제거할 수 있다.
 */
function deleteAllTodo(){}

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} todoId - 할 일의 id
 * @param {number} tagId - 태그의 id
 * @returns {Todo} - 수정된 Todo
 */
function deleteTagOfTodo(todoId, tagId){}

/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} todoId - 할 일의 id
 * @returns {Todo} - 수정된 Todo
 */
function deleteAllTagOfTodo(todoId){}
