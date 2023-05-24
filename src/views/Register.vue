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
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
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
                      ]"
                    >
                      <label for="u_password" class="label">
                        รหัสผ่าน
                      </label>
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
                      <label for="u_firstname" class="label">
                        ชื่อ
                      </label>
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
                      <label for="u_lastname" class="label">
                        นามสกุล
                      </label>
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
export default defineComponent({
  name: "RegisterPage",
  setup() {
    const onFinish = values => {
      console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return {
      // formState,
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
    };
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
