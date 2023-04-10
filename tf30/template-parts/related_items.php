<?php if (has_category()) : ?>
    <?php
    $post_cats = get_the_category();
    $cat_ids = array();
    foreach ($post_cats as $cat) {
        $cat_ids[] = $cat->term_id;
    }
    ?>
<?php endif; ?>
<div class="related-items">
    <?php
    // サブクエリをセット
    $args = array(
        'post_type' => 'post',  // 投稿タイプ
        'posts_per_page' => 8, // 表示件数。 -1ならすべての投稿を取得
        'post__not_in' => array($post->ID), // 表示中の投稿を除外
        'category__in' => $cat_ids, // この投稿と同じカテゴリーに属する投稿の中から
        'orderby' => 'rand'    // ランダム
    );
    $loop = new WP_Query($args);
    ?>
    <?php if ($loop->have_posts()) : ?>
        <?php while ($loop->have_posts()) : $loop->the_post(); ?>
            <!-- 繰り返し表示させる部分 -->
            <a class="related-item" href="<?php the_permalink(); ?>">
                <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail(); ?>
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/img/noimg.png" alt="">
                <?php endif; ?>
                <!-- /related-item-img -->
                <div class="related-item-title"><?php the_title(); ?></div>
                <!-- /related-item-title -->
            </a><!-- /related-item -->
        <?php endwhile; ?>
    <?php endif; ?>
    <?php wp_reset_postdata(); ?>