<template>
  <div class="fixed bottom-4 right-4">
    <!-- 对话框触发按钮 -->
    <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
    <!-- 对话框 -->
    <el-dialog
      title="Langchain 服务"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <p>用户输入:</p>
        <el-input v-model="userInput" @keyup.enter="sendMessage"></el-input>
      </div>
      <div v-if="responseMessage" class="response">
        <p>服务回复:</p>
        <el-alert :title="responseMessage" type="success"></el-alert>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="sendMessage">发送</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const dialogVisible = ref(false);
    const userInput = ref('');
    const responseMessage = ref('');

    const sendMessage = async () => {
      if (userInput.value.trim() === '') {
        return;
      }
      try {
        const response = await axios.post('https://your-backend-service/langchain', {
          message: userInput.value
        });
        responseMessage.value = response.data.message;
      } catch (error) {
        console.error('Error calling the Langchain service:', error);
        responseMessage.value = '服务请求失败';
      }
    };

    const handleClose = done => {
      // 可以在关闭对话框前执行的操作
      dialogVisible.value = false;
      done();
    };

    return {
      dialogVisible,
      userInput,
      responseMessage,
      sendMessage,
      handleClose,
    };
  },
};
</script>

<style scoped>
.response {
  margin-top: 20px;
}
</style>

