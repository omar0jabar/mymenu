<template>
  <div>
    <div class="containr px-5 mx-auto pt-12">
      <h1 class="uppercase font-bold text-2xl text-primary mb-4">Categories</h1>
      <div class="mb-4">
        <Input
          placeholder="Type something"
          prefix-icon="el-icon-search"
          v-model="input2"
        />
      </div>
      <div>
        <Select v-model="categories.value" placeholder="Select" class="w-full">
          <Option
            v-for="item in categories.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </Option>
        </Select>
      </div>
      <div class="mt-8">
        <MealsMenu />
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option } from "element-ui";
export default {
  layout: "FrontLayout",
  name: "CategoryPage",
  data() {
    return {
      categories: {
        options: [
          {
            value: "Option1",
            label: "Option1",
          },
          {
            value: "Option2",
            label: "Option2",
          },
          {
            value: "Option3",
            label: "Option3",
          },
          {
            value: "Option4",
            label: "Option4",
          },
          {
            value: "Option5",
            label: "Option5",
          },
        ],
        value: "",
      },
    };
  },
  components: { Input, Select, Option },
};
</script>
