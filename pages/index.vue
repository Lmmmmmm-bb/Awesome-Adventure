<script setup lang="ts">
import { ElTabs, ElTabPane, ElSpace, ElLink, ElDivider } from 'element-plus';

interface Data {
  [key: string]: {
    name: string;
    url: string;
    repo: string;
    cate: string;
  }[];
}

const awesome = await $fetch<Data>('/api/awesome');

const spacer = h(ElDivider, { direction: 'vertical' });
</script>

<template>
  <div class="h-full p-3">
    <el-tabs>
      <el-tab-pane v-for="key in Object.keys(awesome)" :key="key" :label="key">
        <el-space :spacer="spacer" wrap>
          <el-link
            v-for="item in awesome[key]"
            :key="item.url"
            :href="item.repo"
          >
            {{ item.name }}
          </el-link>
        </el-space>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
