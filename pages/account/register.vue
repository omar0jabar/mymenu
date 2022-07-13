<template>
  <div class="login-page pt-20 px-6">
    <AppLogo class="mb-14" />
    <div>
      <Form :model="login">
        <div class="mb-6">
          <div class="mb-4">
            <Input
              v-model="register.restaurantName"
              placeholder="Nom du restaurant"
            />
          </div>
          <div class="mb-4">
            <Input v-model="register.user" placeholder="Email" />
          </div>
          <div class="mb-4">
            <Input v-model="register.password" placeholder="Mot de passe" />
          </div>
          <div>
            <Input
              v-model="register.password2"
              placeholder="Confirmer le mot de passe"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <Button type="primary" class="text-lg w-40">Créer</Button>
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
      register: {
        restaurantName: "",
        user: "",
        password: "",
        password2: "",
      },
    };
  },
  components: { AppLogo, Form, Input, Button, Icon },
};
</script>

<style lang="scss">
</style>
