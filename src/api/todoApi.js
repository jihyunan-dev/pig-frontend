import { instance } from "./index";

export const todoApi = {
  getTodo: (roomId, cardId) => instance.get(`/room/${roomId}/todo/${cardId}`),
  createTodo: (roomId, cardId, todoTitle) =>
    instance.post(`room/${roomId}/todo`, {
      cardId,
      todoTitle,
    }),

  editTodoTtitle: (roomId, todoId, todoTitle) =>
    instance.patch(`room/${roomId}/todo`, { todoId, todoTitle }),

  checkedTodo: (roomId, todoId, isChecked) =>
    instance.patch(`room/${roomId}/todo`, { todoId, isChecked }),

  addMember: (roomId, todoId, addMember) =>
    instance.patch(`room/${roomId}/todo`, {
      todoId,
<<<<<<< HEAD
      addMember,
=======
      addMember: { memberId: addMember },
>>>>>>> 01cde93 (feat : todo member add & remove 구현)
    }),

  removeMember: (roomId, todoId, removeMember) =>
    instance.patch(`room/${roomId}/todo`, {
      todoId,
<<<<<<< HEAD
      removeMember,
=======
      removeMember: { memberId: removeMember },
>>>>>>> 01cde93 (feat : todo member add & remove 구현)
    }),

  deleteTodo: (roomId, todoId) =>
    instance.delete(`room/${roomId}/todo`, { data: { todoId } }),
};
