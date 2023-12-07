<template>
  <el-container style="height: 100vh;">
    <el-aside width="300px">
      <!-- Resource Topology -->
      <resource-topology></resource-topology>
    </el-aside>

    <el-container>
      <!-- Service Topology -->
      <el-main>
        <service-topology></service-topology>
      </el-main>

      <!-- Service Link -->
      <el-main>
        <service-link></service-link>
      </el-main>

      <!-- Service Log -->
      <el-main>
        <service-log></service-log>
      </el-main>

      <!-- Service Resource Monitoring -->
      <el-main>
        <service-resource-monitoring></service-resource-monitoring>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ResourceTopology from './components/ResourceTopology.vue';
import ServiceTopology from './components/ServiceTopology.vue';
import ServiceLink from './components/ServiceLink.vue';
import ServiceLog from './components/ServiceLog.vue';
import ServiceResourceMonitoring from './components/ServiceResourceMonitoring.vue';

export default {
  components: {
    ResourceTopology,
    ServiceTopology,
    ServiceLink,
    ServiceLog,
    ServiceResourceMonitoring
  }
};
</script>

<style>
/* You can add additional styles if needed */
</style>


<script>
import { ref } from 'vue';
import axios from 'axios';
import { ElButton, ElTable, ElTableColumn } from 'element-plus';

export default {
  components: {
    ElButton,
    ElTable,
    ElTableColumn
  },
  setup() {
    const tableData = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        tableData.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    return { tableData, fetchData };
  }
};
</script>

