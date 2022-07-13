<template>
  <div class="login-page pt-20 px-6">
    <AppLogo class="mb-14" />
    <div>
      <Form :model="login">
        <div class="mb-6">
          <div class="mb-4">
            <Input v-model="login.user" placeholder="Email" />
          </div>
          <div>
            <Input v-model="login.password" placeholder="Mot de passe" />
          </div>
          <div>
            <NuxtLink to="#" class="text-sm text-primary font-roboto"
              >Mot de passe oublie</NuxtLink
            >
          </div>
        </div>
        <div class="flex">
          <div class="flex-1">
            <Button type="primary" class="text-lg w-full">Connexion</Button>
          </div>
          <div class="flex items-center">
            <span class="px-3 text-xs text-gray-400 font-roboto">ou</span>
            <Button
              type="primary"
              class="
                rs
                h-12
                w-12
                p-0
                flex
                items-center
                justify-center
                bg-red-400
              "
            >
              <Icon icon="akar-icons:google-fill" class="text-2xl" />
            </Button>
            <Button
              type="primary"
              class="
                rs rs-fb
                h-12
                w-12
                p-0
                flex
                items-center
                justify-center
                bg-blue-500
              "
            >
              <Icon icon="bxl:facebook" class="text-2xl" />
            </Button>
          </div>
        </div>
        <div>
          <p
            class="
              text-sm
              font-roboto
              text-gray-400 text-justify
              mt-6
              leading-6
            "
          >
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page
          </p>
        </div>
      </Form>
    </div>

    <div class="fixed bottom-0 right-0 pb-6 flex justify-end px-6">
      <Button type="primary" plain class="text-lg w-full">Connexion</Button>
    </div>
  </div>
</template>

<script>
import AppLogo from "../../components/AppLogo.vue";
import { Form, Input, Button } from "element-ui";
import { Icon } from "@iconify/vue2";
export default {
  name: "LoginPage",
  layout: "BaseLayout",
  data() {
    return {
      login: {
        user: "",
        password: "",
      },
    };
  },
  components: { AppLogo, Form, Input, Button, Icon },
};
</script>

<style lang="scss">
.rs {
  padding: 0;
  display: flex;

  &-google {
    background-color: #fa2821;
    border-color: #fa2821;
  }
  &-fb {
    background-color: #5661fd;
    border-color: #5661fd;
  }
}
</style>
