<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <img src="/img/logo.png" alt="Logo" class="img-logo" />
        <div class="card">
          <h1 class="card-header">REGISTER</h1>
          <div class="card-body">
            <a-form
              :model="formState"
              name="basic"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 24 }"
              @submit.prevent="onSubmit()"
            >
              <a-row :gutter="24">
                <a-col :xl="24" :lg="24" :md="12" :sm="24">
                  <div class="form-item-wrapper">
                    <a-form-item
                      name="u_username"
                      :rules="[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]"
                    >
                      <label for="u_username" class="label">
                        ชื่อผู้ใช้งาน
                      </label>
                      <a-input v-model:value="formState.u_username" />
                    </a-form-item>
                  </div>

                  <div class="form-item-wrapper">
                    <a-form-item
                      name="u_password"
                      :rules="[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                        {
                          pattern: /^(?=.*[a-z])[a-zA-Z0-9]{8,15}$/,
                          message:
                            'Password be between 8 and 15 characters long',
                          // รหัสผ่านมีความยาวระหว่าง 8 ถึง 15 ตัวอักษร
                        },
                      ]"
                    >
                      <label for="u_password" class="label"> รหัสผ่าน </label>
                      <a-input-password v-model:value="formState.u_password" />
                    </a-form-item>
                  </div>

                  <div class="form-item-wrapper">
                    <a-form-item
                      name="u_firstname"
                      :rules="[
                        {
                          required: true,
                          message: 'Please input your firstname!',
                        },
                      ]"
                    >
                      <label for="u_firstname" class="label"> ชื่อ </label>
                      <a-input v-model:value="formState.u_firstname" />
                    </a-form-item>
                  </div>

                  <div class="form-item-wrapper">
                    <a-form-item
                      name="u_lastname"
                      :rules="[
                        {
                          required: true,
                          message: 'Please input your lastname!',
                        },
                      ]"
                    >
                      <label for="u_lastname" class="label"> นามสกุล </label>
                      <a-input v-model:value="formState.u_lastname" />
                    </a-form-item>
                  </div>
                </a-col>
              </a-row>

              <div class="form-group buttons">
                <button type="submit" class="btn btn-info btn-block">
                  ลงทะเบียน
                </button>

                <button type="button" class="btn btn-secondary btn-block">
                  เข้าสู่ระบบ
                </button>
              </div>
            </a-form>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const onFinish = async (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return {
      onFinish,
      onFinishFailed,
    };
  },
  data() {
    return {
      formState: {
        u_username: "",
        u_password: "",
        u_firstname: "",
        u_lastname: "",
      },
      errorMessage: null,
      checkUsername: false,
      checkPassword: false,
      checkFirstname: false,
      checkLastname: false,
    };
  },
  methods: {
    onSubmit() {
      // console.log("onSubmit", this.formState);

      // /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{8,15}$/,
      // 'Password must contain at least one digit and be between 8 and 15 characters long',
      //  รหัสผ่านต้องประกอบด้วยตัวเลขอย่างน้อย 1 ตัวและมีความยาวระหว่าง 8 ถึง 15 ตัวอักษร

      // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,15}$/,
      // 'Password must contain at least one uppercase letter, at least one digit, and be between 8 and 15 characters long',
      // รหัสผ่านต้องประกอบด้วยตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว, ตัวเลขอย่างน้อย 1 ตัว และมีความยาวระหว่าง 8 ถึง 15 ตัวอักษร

      const username = this.formState.u_username;
      const password = this.formState.u_password;
      const firstname = this.formState.u_firstname;
      const lastname = this.formState.u_lastname;
      const regexPassword = /^(?=.*[a-z])[a-zA-Z0-9]{8,15}$/;

      const isValidPassword = regexPassword.test(password);

      if (isValidPassword) {
        // console.log("รหัสผ่านถูกต้อง")
        this.checkPassword = true;
      } else {
        // console.log("รหัสผ่านไม่ถูกต้อง")
        this.checkPassword = false;
      }

      if (username != "") {
        this.checkUsername = true;
      } else {
        this.checkUsername = false;
      }

      if (firstname != "") {
        this.checkFirstname = true;
      } else {
        this.checkFirstname = false;
      }

      if (lastname != "") {
        this.checkLastname = true;
      } else {
        this.checkLastname = false;
      }

      // console.log("checkUsername", this.checkUsername);
      // console.log("checkPassword", this.checkPassword);
      // console.log("checkFirstname", this.checkFirstname);
      // console.log("checkLastname", this.checkLastname);

      if (
        this.checkUsername == true &&
        this.checkPassword == true &&
        this.checkFirstname == true &&
        this.checkLastname == true
      ) {
        console.log("this.formState", this.formState);
        axios
          // .post(`http://localhost:3066/api/account/register`, this.formState)
          .post(`api/account/register`, this.formState)

          .then((response) => {
            console.log("response", response);
            this.openNotificationWithIcon(
              "success",
              "Register success",
              "Save data successfully"
            );
            this.onReset();
          })
          .catch((err) => {
            this.openNotificationWithIcon(
              "error",
              err.request.statusText,
              err.response.data.message
            );
            console.log("error", err);
          });
      }
    },

    onReset() {
      this.formState = {
        u_username: "",
        u_password: "",
        u_firstname: "",
        u_lastname: "",
      };
    },

    openNotificationWithIcon(type, title, details) {
      this.$notification[type]({
        message: `${title}`,
        description: `${details}`,
      });
    },
  },
});
</script>

<style scoped>
.img-logo {
  width: 50px;
  display: block;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 30px;
}

h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
}

.card {
  margin-bottom: 15%;
}

.card-body {
  padding-left: 15%;
  padding-right: 15%;
}

.btn-info {
  color: #ffffff;
}

.buttons .btn-secondary {
  margin-top: 20px;
}

.buttons {
  margin-top: 30px;
  margin-bottom: 50px;
}

.btn-block {
  width: 100%;
}
</style>
