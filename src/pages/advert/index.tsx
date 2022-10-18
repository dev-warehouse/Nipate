
function AdvertPage() {
  return (
    <div className={styles.page_root}>
      <div className={styles.advert_detail_root}>
        <p className={styles.advert_title}>
          Mama Samaki, Samaki nzuri ni tamu, Facilis.
        </p>
        <p className={styles.advert_description}>
          Facilis delectus rem suscipit. Cumque illum autem sit voluptatum ullam
          minus tempore. Quam ut delectus ullam omnis labore nisi omnis qui
          iusto. Optio aperiam ea consequatur. Quia sapiente sunt et consequatur
          ut et aspernatur. Excepturi et nam harum aspernatur unde porro.
          <br />
          Unde ut perferendis. Illo quo optio aut quos. Placeat optio explicabo.
          Officia beatae fuga laboriosam saepe. Non reiciendis eum.
          <br />
          Perferendis dolores cumque sed nemo dolor dolores aliquam sit. Non
          dolores doloribus explicabo totam dolor praesentium. Placeat ducimus
          in. Non non enim consequatur quam asperiores dolor sunt magnam neque.
          Eos iste corporis facilis ab eum dicta non pariatur voluptatem.
        </p>
        <div className={styles.map_container}>
          <MapView className='rounded-lg' />
        </div>
      </div>
      <div className={styles.provider_root}>
        <div className={styles.provider_prof_section_root}>
          <div className={styles.provider_profile_pic_root}>
            <ProviderPic />
            <ProviderLocation />
          </div>
          <AdvertCategories />
        </div>
        <div className={styles.provider_specs_root}>
          <Availability />
          <WorkingHours />
        </div>
        <Button className='md:!w-fit'>Request</Button>
      </div>
    </div>
  )
}

export default AdvertPage
