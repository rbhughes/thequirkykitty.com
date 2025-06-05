<div align="center">
<a href="https://thequirkykitty.com">The Quirky Kitty</a>
</div>

![The Quirky Kitty](public/tqk_black.png)

### It's a basic, static site built with [Next.js](https://nextjs.org) and hosted on [S3](https://aws.amazon.com/s3/).

### ...not _entirely_ static thanks to some AWS stuff:

* Contact form built with [shadcn](https://ui.shadcn.com/), uses a [lambda](https://aws.amazon.com/lambda/) function to forward emails.

* The gallery displays an arbitrary number of photos loaded from s3

* Text content is actually [markdown](https://www.markdownguide.org/) and dynamically read from S3 via [CloudFront](https://aws.amazon.com/cloudfront/)
