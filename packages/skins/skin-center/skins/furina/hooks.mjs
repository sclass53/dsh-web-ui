export default function defineSkinHooks() {
  return {
    apply(ctx) {
      // TODO(review): favicon port. v1 injected a <link rel="icon"> with an
      // inline SVG; the codemod extracted it to assets/whale-icon.png.
      const favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.type = 'image/png'
      favicon.href = ctx.assetBase + '/assets/furina-icon.png'
      document.head.append(favicon)
      ctx.onCleanup(() => favicon.remove())
    },
  }
}
