<?php get_header(); ?>



<!-- content -->
<div id="content">
    <div class="inner">

        <!-- primary -->
        <main id="primary">

            <!-- breadcrumb -->
            <?php if (function_exists("bcn_display")) : ?>
                <!-- breadcrumb -->
                <div class="breadcrumb">
                    <?php bcn_display(); ?>
                <?php endif ?>
                </div><!-- /breadcrumb -->

                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : ?>
                        <?php the_post(); ?>

                        <!-- entry -->
                        <article class="entry">

                            <!-- entry-header -->
                            <div class="entry-header">
                                <?php $category = get_the_category(); ?>
                                <div class="entry-label"><?php my_the_post_category(true); ?>
                                </div>
                                <!-- /entry-item-tag -->
                                <h1 class="entry-title"><?php the_title(); ?></h1><!-- /entry-title -->

                                <!-- entry-meta -->
                                <div class="entry-meta">
                                    <time class="entry-published" datetime="<?php the_time("c"); ?>">公開日
                                        <?php the_time("y/n/j"); ?></time>
                                    <?php if (get_the_time("c") !== get_the_modified_time("c")) : ?>
                                        <time class="entry-updated" datetime="<?php the_modified_time("c"); ?>">最終更新日
                                            <?php the_modified_time("y/n/j"); ?></time>
                                    <?php endif; ?>
                                </div><!-- /entry-meta -->

                                <!-- entry-img -->
                                <div class="entry-img">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail(); ?>
                                    <?php else : ?>
                                        <img src="<?php echo get_template_directory_uri(); ?>/img/noimg.png" alt="">
                                    <?php endif; ?>
                                </div><!-- /entry-img -->

                            </div><!-- /entry-header -->

                            <!-- entry-body -->
                            <div class="entry-body">
                                <?php the_content(); ?>
                                <?php wp_link_pages(array(
                                    "before" => "<nav class='entry-links'>",
                                    "after" => "</nav>",
                                    "link_before" => "",
                                    "link_after" => "",
                                    "next_or_number" => "number",
                                    "separator" => "",
                                )); ?>
                                <?php echo do_shortcode("[btn link='http://day-trial.local/contact/']お問い合わせ[/btn]"); ?>
                            </div><!-- /entry-body -->

                            <!-- <?php $post_tags = get_the_tags(); ?> -->
                            <!-- <?php var_dump($post_tags); ?> -->
                            <!-- var_dump クラスの中身を一気に表示する -->
                            <div class="entry-tag-items">
                                <div class="entry-tag-head">タグ</div><!-- /entry-tag-head -->
                                <?php my_get_tag_items($post->ID); ?>
                            </div><!-- /entry-tag-items -->


                            <div class="entry-related">
                                <div class="related-title">関連記事</div>
                                <?php get_template_part("template-parts/related_items"); ?>

                            </div><!-- /related-items -->
    </div><!-- /entry-related -->

    </article> <!-- /entry -->
<?php endwhile; ?>
<?php endif; ?>
</main><!-- /primary -->

<?php get_sidebar(); ?>

</div><!-- /inner -->
</div><!-- /content -->

<?php get_footer(); ?>