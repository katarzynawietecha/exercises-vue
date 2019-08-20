import Vue from 'vue'
import DescriptionAbout from '@/components/DescriptionAbout'

// test static data
describe('DescriptionAbout.vue', () => {
  // test case
  it('should render correct contents', () => {
    const Constructor = Vue.extend(DescriptionAbout)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.static-text').textContent)
      .toEqual('This text is static.')
  })
})


// test props
function getRenderedText (DescriptionAbout, propsData) {
  const Constructor = Vue.extend(DescriptionAbout)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.querySelector('.props-text').textContent
}
describe('DescriptionAbout.vue', () => {
  it('should render propstext when passed', () => {
    expect(getRenderedText(DescriptionAbout, {
      propstext: 'This text is a prop.'
    })).toBe('This text is a prop.')

    expect(getRenderedText(DescriptionAbout, {
      propstext: 'Test message.'
    })).toBe('Test message.')
  })
})


// test counter
// describe('DescriptionAbout.vue', () => {
//   it('check counter1 after button-counter is clicked', () => {
//     const Constructor = Vue.extend(DescriptionAbout)
//     const vm =  new Constructor().$mount()
//     expect(vm.$el.querySelector('.buttonbox-counter span')).toBe(0)
//     button.trigger('click')
//     expect(wrapper.vm.counter1).toBe(1)
//   })
// })


// https://vuejs.org/v2/guide/unit-testing.html
