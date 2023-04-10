    <!-- pickup -->
    <div id="pickup">
        <div class="inner">

            <div class="pickup-items">
                <?php $pickup_ids = array(144, 145, 146); ?>
                <?php $pickup_query = new WP_Query(
                    array(
                        'post_type' => 'post',  // 投稿タイプ
                        'posts_per_page' => 3, // 表示件数。 -1ならすべての投稿を取得
                        'post__in' => $pickup_ids // この中の投稿から
                    )
                ); ?>

                <?php if ($pickup_query->have_posts()) : ?>
                    <?php while ($pickup_query->have_posts()) : ?>
                        <?php $pickup_query->the_post(); ?>
                        <a href="#" class="pickup-item">
                            <div class="pickup-item-img">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail(); ?>
                                <?php else : ?>
                                    <img src="<?php echo get_template_directory_uri(); ?>/img/noimg.png" alt="">
                                <?php endif; ?>
                                <div class="pickup-item-tag"><?php my_the_post_category(false); ?></div>
                                <!-- /pickup-item-tag -->
                            </div><!-- /pickup-item-img -->
                            <div class="pickup-item-body">
                                <h2 class="pickup-item-title"><?php the_title(); ?></h2>
                                <!-- /pickup-item-title -->
                            </div><!-- /pickup-item-body -->
                        </a><!-- /pickup-item -->
                    <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>
            </div><!-- /pickup-items -->

        </div><!-- /inner -->
    </div><!-- /pickup -->