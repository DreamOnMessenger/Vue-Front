<template>
  <div class="w-100 Dark">
    <b-list-group-item v-if="type == 'Recieved'" class="Dark d-flex">
      <b-avatar
        size="2rem"
        src="https://i.pravatar.cc/300"
        class="mr-1"
      ></b-avatar>
      <div class="mt-2 mr-auto Messege Recieved-Dark">
        <h6>UserName</h6>
        <div>
          Texsjfdskjfdklsjfk sdfjskljfksdj fk ksjkj fskj kj ksjkf slflksl
          jjfksdf smfksh sh jhsh jdh jhshd h sdh js hjsh fjhsj s jsjd ksk k sk
          ksjk jksdk t
        </div>
      </div>
    </b-list-group-item>
    <b-list-group-item v-else class="Dark">
      <b-avatar
        size="2rem"
        src="https://i.pravatar.cc/300"
        class="mr-auto"
      ></b-avatar>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Recieved',
    },
  },
};
</script>

<style scoped>
.Dark {
  background-color: #2a304d;
  border: 0;
}
.Send-Dark {
  background-color: #fff;
  color: rgb(0, 0, 0);
}
.Recieved-Dark {
  background-color: #53586f;
  color: #fff;
}
.Messege {
  padding: 6px;
  border-radius: 10px;
  border-top-left-radius: 0;
  max-width: 75%;
}
</style>
