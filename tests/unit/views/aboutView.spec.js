import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";
describe("AboutView.vue", () => {
  test("debe renderizar la vista About", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.exists()).toBe(true);
  });
});
